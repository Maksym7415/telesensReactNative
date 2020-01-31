import { useAsyncStorage } from '@react-native-community/async-storage'

const {getItem, removeItem} = useAsyncStorage('auth')

const readItemFromStorage = async () => {
  const item = await getItem()
  return JSON.parse(item)
}

const removeItemFromStorage = async () => {
  const item = await removeItem()
}

function dive(strings, ...values) {
     let obj = values[0]
     for(let key of strings[1].split('.')) {
         if(obj && key && typeof obj === 'object') {
             obj = obj[key]
         } else return undefined
     }
    return obj
}

function firstItem (arr) {
    let res = arr.filter(item => item.parentCatId ? item : '')
    return res
}


function searchSong (arr, id) {
  return arr ? arr.filter(el => el.contentNo === id ? el : '') : ''
}

function getSubCatsContent (arr, id) {
  return arr.filter(item => item.parentCatId === id && item)
}

export { dive, firstItem, searchSong, getSubCatsContent, readItemFromStorage, removeItemFromStorage}
