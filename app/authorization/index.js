import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TextInput, Dimensions, TouchableOpacity, Button } from 'react-native'
import { dive, setASItem } from '../../functions'
import { connect } from 'react-redux'
import { authorization } from '../../redux/reducers/actions'
import { useAsyncStorage } from '@react-native-community/async-storage'

const Authorize = props => {
  let [tel, changeTel] = useState('')
  let [password, changePassword] = useState('')
  let {setItem} = useAsyncStorage('auth')

  const saveToStorage = async newValue => {
    await setItem(newValue)
    console.log(newValue)
  }



    return !props.data ? (
      <View>
        <View>
          <Text> Telophone </Text>
          <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => changeTel(text)}
          value={tel}
          />
        </View>
        <View>
          <Text> Password </Text>
          <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => changePassword(text)}
          value={password}
          />
        </View>
        <Button title= 'Login' onPress= {() => tel !== '' && password !== '' && !props.data && props.log(password, tel)}/>
      </View>
    ) : saveToStorage(JSON.stringify({tel, password})) && props.navigation.push('HeaderNav')

  }

export default connect(state => ({data: dive`${state}authorization.payload.data`}), {log: authorization})(Authorize)
