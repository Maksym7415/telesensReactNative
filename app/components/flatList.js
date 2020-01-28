import React from 'react';
import { SafeAreaView, View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

const Item = (props) =>
    <TouchableOpacity style= {props.itemStyle} onPress= {props.press}>
      {console.log(props)}
      <Text style={props.itemTitleStyle}>{props.title}</Text>
    </TouchableOpacity>

const ItemContent = props =>
  <TouchableOpacity style= {props.itemStyle} onPress= {props.press}>
    <Image
      style= {props.imgStyle}
      source= {{ uri: props.src}}
    />
    <View style= {{marginLeft: 10}}>
      <Text style= {{fontSize: 16}}>
        {props.title}
      </Text>
      <Text>
        {props.artist}
      </Text>
    </View>
    <Text style= {{marginLeft: 'auto'}}>
      {props.price}
    </Text>
  </TouchableOpacity>


const ListFlat = props =>
    <SafeAreaView style={props.styles}>
      <FlatList
        data={props.data}
        renderItem={props.renderItem}
        keyExtractor={props.keyExtractor}
      />
    </SafeAreaView>

export { Item, ItemContent, ListFlat }
