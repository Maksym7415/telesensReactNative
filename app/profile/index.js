import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import { getASItem } from '../../functions'
import { connect } from 'react-redux'
import { dive } from '../../functions'
import { useAsyncStorage } from '@react-native-community/async-storage'

const Profile = props => {

  let [store, setStore] = useState()
  const {getItem, removeItem} = useAsyncStorage('auth')

  const readItemFromStorage = async () => {
    const item = await getItem()
    setStore(JSON.parse(item))
    console.log(store)
  }
  const removeItemFromStorage = async () => {
    const item = await removeItem()
  }
  useEffect(() => {
    if(props.data) {readItemFromStorage()}
  }, [])

    return (
  <View style= {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Button title= 'check' onPress= {() => readItemFromStorage()}/>
  <Button title= 'remove' onPress= {() => removeItemFromStorage()}/>
  </View>
)
}
export default connect (state => ({data: dive`${state}authorization.payload.data`}))(Profile)
