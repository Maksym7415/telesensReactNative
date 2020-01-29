import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { getCategories, actionGetPhotos } from './redux/reducers/actions.js'
import store from './redux'
import { Provider } from 'react-redux'
import Header from './app/header'
import HeaderNav from './navigation/tabNavigator/headerNav'
import MainNav from './navigation/stackNavigator/mainNavigator'

function App () {
  return (
    <Provider store= {store}>
      <MainNav/>
    </Provider>
  );
};


export default App;
