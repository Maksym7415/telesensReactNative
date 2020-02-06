import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';

const ItemContent = props =>
  <View style= {props.itemStyle} >
    <Image
      style= {props.imgStyle}
      source= {{ uri: props.src}}
    />
    <TouchableOpacity style= {{marginLeft: 5, width: 30, height: 40}} onPress= {props.play}>
      <Image
        style= {{width:20, height: 20}}
        source= {props.playIcon}
      />
    </TouchableOpacity>
    <TouchableOpacity style= {{marginLeft: 10}} onPress= {props.press}>
      <Text style= {{fontSize: 16}}>
        {props.title}
      </Text>
      <Text>
        {props.artist}
      </Text>
    </TouchableOpacity>
    <Text style= {{marginLeft: 'auto'}}>
      {props.price}$
    </Text>
  </View>

export default ItemContent
