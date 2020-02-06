import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Categories from '../../app/categories'
import { connect } from 'react-redux'
import SubCats from '../../app/subCats'
import Profile from '../../app/profile'
import Test from '../../test'
import Content from '../../app/subCats/content'
import SongInfo from '../../app/subCats/content/songInfo'
import Buy from '../../app/buy'

const SubCatsNav = createStackNavigator(
  {
    Categories,
    SubCats: {
      screen: SubCats,
      navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
      headerLeft: () => null
    })
    },
    Content: {
      screen: Content,
      navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
      headerLeft: () => null
    })

    },
    SongInfo: {
      screen: SongInfo,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerLeft: () => null
      })
    },
    Buy: {
      screen: Buy,
      navigationOptions: () => ({
        title: 'Content purchase',
        headerLeft: () => null
      })
    },
  }
)
export default SubCatsNav
