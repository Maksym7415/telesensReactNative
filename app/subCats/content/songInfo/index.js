import React, { useState } from 'react'
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'
import TrackPlayer, { TrackPlayerEvents } from 'react-native-track-player'

const SongInfo = props => {

  let [url] = useState(`https://t-rbt.telesens.ua/t-rbt/sound?id=${props.navigation.state.params.contentNo}&type=public`)
  let [trackState, setTrackState] = useState()

  const handleState = TrackPlayer.addEventListener('playback-state', async (data) => {
          const state = await TrackPlayer.getState()
          setTrackState(trackState = state)
        })

  props.navigation.addListener('willBlur', () => {
    handleState.remove()
    if (trackState === 3) {
      TrackPlayer.stop()
    }
  })

  const handlePlay = () => {
    if(trackState !== 3) {
      TrackPlayer.setupPlayer().then(async () => {
        await TrackPlayer.add({
          url: url
        })
        TrackPlayer.play()
      })
    } else {
      TrackPlayer.stop()
    }
  }

  return (
    <View style= {styles.container}>
      <TouchableOpacity onPress= {handlePlay}>
        <Image style= {styles.image} source= {{uri: `https://t-rbt.telesens.ua/t-rbt/image?id=${props.navigation.state.params.imageId}`}}/>
      </TouchableOpacity>
      <Text>Artist: {props.navigation.state.params.artist} </Text>
      <Text>Price: {props.navigation.state.params.amountOnetime} </Text>
      <Text>Prolongation price: {props.navigation.state.params.amountPeriodic} </Text>
      <Text>Charge period: {props.navigation.state.params.chargePeriod} </Text>
      <Text>ID: {props.navigation.state.params.contentNo} </Text>
      <Text>Type: melody </Text>
      <TouchableOpacity style= {styles.button} onPress= {() => props.navigation.push('Buy', props.navigation.state.params)}>
        <Text> Buy </Text>
      </TouchableOpacity>
    </View>
  )
}

export default SongInfo

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 5
  },
  button: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#09ab00',
    height: 25,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
