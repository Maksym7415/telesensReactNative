import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { dive, getSubCatsContent } from '../../../functions'
import { connect } from 'react-redux'
import { ListFlat } from '../../components/flatList'
import { getContent } from '../../../redux/reducers/actions'
import ItemContent from './itemContent'
import TrackPlayer, { TrackPlayerEvents } from 'react-native-track-player'

const Content = props => {

  let [currentTrack, setCurrentTrack] = useState(null)
  let [position, setPosition] = useState()
  let [trackState, setTrackState] = useState()

  const handlePlay = (id) => {
    setPosition(position = id)
    if(currentTrack === null) {
      TrackPlayer.setupPlayer().then(async () => {
        await TrackPlayer.add({
          url: `https://t-rbt.telesens.ua/t-rbt/sound?id=${id}&type=public`
        })
        setCurrentTrack(currentTrack = `https://t-rbt.telesens.ua/t-rbt/sound?id=${id}&type=public`)
        TrackPlayer.play()
      })
    } else {
      if (currentTrack === `https://t-rbt.telesens.ua/t-rbt/sound?id=${id}&type=public`) {
        TrackPlayer.stop()
        setCurrentTrack(currentTrack = null)
      } else {
        TrackPlayer.stop()
        TrackPlayer.setupPlayer().then(async () => {
          await TrackPlayer.add({
            url: `https://t-rbt.telesens.ua/t-rbt/sound?id=${id}&type=public`
          })
          setCurrentTrack(currentTrack = `https://t-rbt.telesens.ua/t-rbt/sound?id=${id}&type=public`)
          TrackPlayer.play()
        })
      }
    }
  }

  const handleState = TrackPlayer.addEventListener('playback-state', async (data) => {
          const state = await TrackPlayer.getState()
          setTrackState(trackState = state)
          if (trackState === 0 || trackState === 1) {
            setCurrentTrack(currentTrack = null)
          }
  })

  props.navigation.addListener('willBlur', () => {
    handleState.remove()
    if (trackState === 3) {
      TrackPlayer.stop()
      setCurrentTrack(currentTrack = null)
    }
  })

  useEffect(() => {
    props.getContent(props.navigation.state.params.id)
  }, [])

  if (props.data) {
    return (
      <View style= {styles.container}>
        <ListFlat
          data= {props.data}
          renderItem= {({ item }) => <ItemContent press= {() => props.navigation.push('SongInfo', item)} itemStyle= {styles.itemContainer} imgStyle= {styles.image} src= {`https://t-rbt.telesens.ua/t-rbt/image?id=${item.imageId}`} title= {item.title} artist= {item.artist} price= {item.amountOnetime} play= {() => handlePlay(item.contentNo)} playIcon= {currentTrack !== null ? item.contentNo === position ? require('../../../images/pause.png') : require('../../../images/play.png') : require('../../../images/play.png')}/>}
          keyExtractor= {item => item.contentNo.toString()}
          />
      </View>
    )
  } else {
      return (
        <Text> Nothing was found </Text>
      )
  }
}

export default connect(state => ({data: dive`${state}promise.content.payload.data.searchResult.element`}), {getContent})(Content)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: Dimensions.get('window').width,

  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    width: Dimensions.get('window').width,
    borderWidth: 0.5,
    borderColor: '#4d4d4d',
    backgroundColor: '#bababa',
    marginVertical: 2,
    marginHorizontal: 1
  },
  image: {
    width: 80,
    height: 80,
  }
})
