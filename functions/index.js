import {AsyncStorage} from 'react-native'

function dive(strings, ...values) {
     let obj = values[0]
     for(let key of strings[1].split('.')) {
         if(obj && key && typeof obj === 'object') {
             obj = obj[key]
         } else return undefined
     }
    return obj
}

const setASItem = async (item, value) => {
  try {
      await AsyncStorage.setItem(item , value);
    } catch (e) {

    }
  }


  const getASItem = async (item) => {
    try {
      const value = await AsyncStorage.getItem(item);
      if (value !== null) {
        console.log(value)
        return value
      }
    } catch (e) {

    }
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

export { dive, firstItem, searchSong, getSubCatsContent, setASItem, getASItem}
