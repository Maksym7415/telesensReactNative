import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HeaderNav from '../tabNavigator/headerNav'
import Header from '../../app/header'

const MainNav = createStackNavigator(
  {
    HeaderNav: {
      screen: HeaderNav,
      navigationOptions: {
        
      }
    }
  }
)

export default createAppContainer(MainNav)
