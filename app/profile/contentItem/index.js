import React from 'react'
import { StyleSheet, View, Button, Text, Image, TouchableOpacity, Dimensions } from 'react-native'

const ContentItem = props =>
  <View style= {styles.container}>
    <View style= {styles.imgContainer}>
      <Image style= {styles.image} source= {props.source}/>
    </View>
    <View>
      <Text>
        COntent Type: Single
      </Text>
      <Text>
        Date of purchase: {props.datePurchase}
      </Text>
      <Text>
        Paid period of validity: {props.endDate}
      </Text>
      <Text>
        {props.title}
      </Text>
      <Text>
        {props.artist}
      </Text>
      <TouchableOpacity style= {styles.button}>
        <Text> Remove content</Text>
      </TouchableOpacity>
    </View>
  </View>

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    marginBottom: 15,
    borderWidth: 0.5,
    borderColor: '#4d4d4d',
    backgroundColor: '#bababa',
    marginHorizontal: 1
  },
  imgContainer: {
    marginRight: 10,
    padding: 5,
  },
  image: {
    width: 100,
    height: 100
  },
  button: {
    width: 150,
    height: 30,
    backgroundColor: '#ffffff',
    borderWidth: 0.5,
    borderColor: '#2af500',
    borderRadius: 5,
    marginHorizontal: 10,
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ContentItem
