import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Categories from '../../app/categories'
import Profile from '../../app/profile'
import SubCatsNav from '../stackNavigator/subCatsNav'

const HeaderNav = createMaterialTopTabNavigator({
  Catalog: SubCatsNav,
  Profile: Profile
})

export default createAppContainer(HeaderNav)
