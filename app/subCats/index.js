import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { Item, ListFlat } from '../components/flatList'
import Content from './content'


const SubCats = props => 
    <View style= {styles.container}>
      {console.log(props.navigation.state.params)}
      <ListFlat
        data= {props.navigation.state.params}
        renderItem= {({ item }) => <Item press= {() => props.navigation.push('Content', item.contentCatId)} title= {item.catName} itemStyle= {styles.itemStyle} itemTitleStyle= {styles.itemTitleStyle}/>}
        keyExtractor= {item => item.contentCatId.toString()}
      />
    </View>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  itemStyle: {
    height: 55,
    paddingLeft: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    borderWidth: 0.5,
    borderColor: '#4d4d4d',
    backgroundColor: '#bababa',
    marginVertical: 2,
    marginHorizontal: 1
  },
  itemTitleStyle: {

  }
})

export default SubCats
