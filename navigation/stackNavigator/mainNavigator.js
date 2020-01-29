import { createAppContainer } from 'react-navigation';
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import HeaderNav from '../tabNavigator/headerNav'
import Header from '../../app/header'
import { View, Text } from 'react-native'
import Authorize from '../../app/authorization'

const MainNav = createStackNavigator(
  {
    HeaderNav: {
      screen: HeaderNav,
      navigationOptions: {
        header: ({navigation}) => {

          return (<Header press= {() => navigation.push('Authorize')} />)
        }
      }
    },
    Authorize: Authorize
  }
)

export default createAppContainer(MainNav)
