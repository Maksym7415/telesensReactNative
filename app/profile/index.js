import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Button, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { dive } from '../../functions'
import ContentItem from './contentItem'
import { ListFlat } from '../components/flatList'

const Profile = props => {

  return props.data ? (
    <View style= {styles.container}>
      <Text> You entered as {props.subscriber.subsIdent} </Text>
      <View>
        <ListFlat
          data= {props.data}
          renderItem= {({item}) => <ContentItem source= {{uri: `https://t-rbt.telesens.ua/t-rbt/image?id=${item.imageId}`}} title= {item.title} artist= {item.artist} infoIcon= {require('../../images/information.png')} datePurchase= {`${item.createdDt.day}/${item.createdDt.month}/${item.createdDt.year} ${item.createdDt.hour}:${item.createdDt.minute}:${item.createdDt.second}`} endDate= {`${item.endDt.day}/${item.endDt.month}/${item.endDt.year}`}/>}
          keyExtractor= {item => item.contentNo.toString()}
          style= {styles.itemContainer}
          />
      </View>
    </View>
  ) : null
}

export default connect (state => ({
                                    data: dive`${state}authorization.payload.data.publicContentItem`,
                                    subscriber: dive`${state}authorization.payload.data.subscriber`
                                  }))(Profile)

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    padding: 5,
    flex: 1,
  },
  itemContainer: {

  }
})
