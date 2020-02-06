import React from 'react'
import { SafeAreaView, View, FlatList, Image, Text, TouchableOpacity } from 'react-native'

const Item = (props) =>
    <TouchableOpacity style= {props.itemStyle} onPress= {props.press}>
      <Text style={props.itemTitleStyle}>{props.title}</Text>
    </TouchableOpacity>


const ListFlat = props =>
    <SafeAreaView style={props.styles}>
      <FlatList
        data={props.data}
        renderItem={props.renderItem}
        keyExtractor={props.keyExtractor}
      />
    </SafeAreaView>

export { Item, ListFlat }
