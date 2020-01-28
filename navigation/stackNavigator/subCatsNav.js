import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Categories from '../../app/categories'
import { connect } from 'react-redux'
import SubCats from '../../app/subCats'
import Profile from '../../app/profile'
import Test from '../../test'
import Content from '../../app/subCats/content'
import SongInfo from '../../app/subCats/content/songInfo'

const SubCatsNav = createStackNavigator(
  {
    Categories,
    SubCats,
    Content,
    SongInfo
  }
)
export default SubCatsNav
