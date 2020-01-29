import React, { useEffect } from 'react'
import { StyleSheet, View, Button, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { getCategories } from '../../redux/reducers/actions'
import { dive } from '../../functions'

const Header = props => {
  return (
    <View style= {styles.container}>
        <Text style= {{fontSize: 20}}>
          T-RBT
        </Text>
        <TouchableOpacity style= {{width: 50, height: 50}} onPress= {props.press}>
          {props.data ? <Text >Logout</Text> : <Text >Login</Text>}
          <Image style= {{width: 30, height: 30}} source= {{uri: 'https://t-rbt.telesens.ua/t-rbt/image?id=499105566'}}/>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#32d06b',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  }
})

export default connect(state => ({data: dive`${state}authorization.payload.data`})) (Header)
