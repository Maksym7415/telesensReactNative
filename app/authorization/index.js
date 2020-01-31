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
  let [style, setStyle] = useState('none')

  const saveToStorage = async newValue => {
    await setItem(newValue)
  }

  const handleChangeTel = text => {
    changeTel(text)
  }
  const handleChangePassword = text => {
    changePassword(text)
  }

  const handleClick = () => {
    tel.match(/^[0-9]{10,12}$/g) !== null &&
    password.match(/[0-9a-zA-Z]{4,}/g) !== null &&
    !props.data ? props.log(password, tel) & setStyle(style = 'none') : setStyle(style = 'flex')
  }

  useEffect(() => {
    if (props.data) {
      saveToStorage(JSON.stringify({tel, password}))
      props.navigation.push('HeaderNav')
    }
  }, [props.data])

  useEffect(() => {
    if(props.error) {
      setStyle(style = 'flex')
    }
  }, [props.error])

    return (
      <View style= {styles.container}>
        <View>
          <Text> Telophone </Text>
          <TextInput
          style={{ height: 40, borderColor: 'grey', borderWidth: 1 }}
          onChangeText={handleChangeTel}
          value={tel}
          />
        </View>
        <View>
          <Text> Password </Text>
          <TextInput
          style={{ height: 40, borderColor: 'grey', borderWidth: 1 }}
          onChangeText={handleChangePassword}
          value={password}
          />
        </View>
        <Text style= {{color: 'red', display: style}}> Invalid password </Text>
        <Button style= {styles.button} title= 'Login' onPress= {handleClick}/>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    padding: 5
  },
  button: {
    marginTop: 10,
    width: 100
  },
})

export default connect(state => ({
                                  data: dive`${state}authorization.payload.data`,
                                  error: dive`${state}authorization.error`
                                }), {log: authorization})(Authorize)
