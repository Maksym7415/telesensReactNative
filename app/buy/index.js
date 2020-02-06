import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native'
import { dive } from '../../functions'
import { connect } from 'react-redux'
import { buySong, delSong, authorization } from '../../redux/reducers/actions'
import { readItemFromStorage } from '../../functions'
import MyModal from '../components/modal'

const Buy = props => {

  let [login, setLogin] = useState()
  let [visible, setVisible] = useState(false)
  let [message, setMessage] = useState()

  const successfullBuy = () => {
      props.login(login.password, login.tel) //after successfully purchase I'm refreshing profile info
      props.delSong()
      setVisible(visible = false)
      props.navigation.popToTop()
  } //because component subscribed to response about purchase, I'm deleting this response from redux, to have empty state for the next purchases

  const errorBuy = () => {
    setVisible(visible = false)
    props.delSong()
  }

  const handleBuy = () =>
    props.buySong(login.password, login.tel, +props.navigation.state.params.contentNo)

  useEffect(() => {
    readItemFromStorage().then(res =>{
      setLogin(login = {
                        password: res.password,
                        tel: res.tel
                        }
              )
    })
  }, [])

  useEffect(() => {
    if(props.purchaseOk) {
      setMessage(message = 'Operation is performed successfully')
      setVisible(visible = true)
    }
  }, [props.purchaseOk])

  useEffect(() => {
    if(props.purchaseEr) {
      setMessage(message = props.purchaseEr)
      setVisible(visible = true)
    }
  }, [props.purchaseEr])

  return (
    <View style= {styles.container}>
      <Text> {props.navigation.state.params.title} </Text>
      <Text> {props.navigation.state.params.artist} </Text>
      <Text> {props.navigation.state.params.amountOnetime}$ </Text>
      <TouchableOpacity style= {styles.button} onPress= {handleBuy}>
        <Text> Submit </Text>
      </TouchableOpacity>
      <MyModal visible = {visible} message= {message} closeModal= {props.purchaseOk ? successfullBuy : errorBuy}/>
    </View>
  )
}

export default connect(state => ({
                                  purchaseOk: dive`${state}promise.buy.payload.data`,
                                  purchaseEr: dive`${state}promise.buy.error.response.data.message`
                                }),
                                {
                                  buySong,
                                  delSong,
                                  login: authorization
                                })(Buy)

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: '30%',
    backgroundColor: '#b4b4b4',
    borderWidth: 0.5,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: 200
  },
  button: {
    width: 70,
    height: 30,
    marginLeft: 'auto',
    marginTop: 5,
    backgroundColor: '#06ac12',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
