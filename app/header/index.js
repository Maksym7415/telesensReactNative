import React, { useEffect } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import { getCategories } from '../../redux/reducers/actions'
import { dive } from '../../functions'
import HeaderNav from '../../navigation/tabNavigator/headerNav'
import { createAppContainer } from 'react-navigation';

const Header = props => {
  return (
    <View style= {styles.container}>
    {console.log('head' + props.navigation)}
      <View style= {styles.head}>
        <Text style= {{fontSize: 20}}>
          T-RBT
        </Text>
        <Text>
        Search
        </Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#32d06b'
  },
  head: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  }
});

export default createAppContainer(Header)
