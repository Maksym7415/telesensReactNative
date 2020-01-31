import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions, Image, Button } from 'react-native'
import { dive, getSubCatsContent } from '../../../../functions'
import { connect } from 'react-redux'
import { buySong } from '../../../../redux/reducers/actions'

const SongInfo = props => {

  return (
    <View>
      <Image style={{width: 200, height: 200}} source= {{uri: `https://t-rbt.telesens.ua/t-rbt/image?id=${props.navigation.state.params.imageId}`}}/>
      <Text>Artist: {props.navigation.state.params.artist} </Text>
      <Text>Price: {props.navigation.state.params.amountOnetime} </Text>
      <Text>Prolongation price: {props.navigation.state.params.amountPeriodic} </Text>
      <Text>Charge period: {props.navigation.state.params.chargePeriod} </Text>
      <Text>ID: {props.navigation.state.params.contentNo} </Text>
      <Text>Type: melody </Text>
      <Button title= 'Buy' onPress= {() => props.buySong('0000', '0994006507', props.navigation.state.params.contentNo)}/>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default connect (state => ({data: dive`${state}promise`}), {buySong})(SongInfo)
