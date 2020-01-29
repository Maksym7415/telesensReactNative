import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { dive, getSubCatsContent } from '../../functions'
import { connect } from 'react-redux'
import { Item, ListFlat } from '../components/flatList'
import { getCategories } from '../../redux/reducers/actions'

const Categories = props => {

  useEffect(() => {
    props.getCategories()
  }, [])

  if (props.data) {
    return (
      <View style={styles.container}>
          <ListFlat
            styles= {styles.listStyle}
            data= {props.data}
            renderItem= {({ item }) => !item.parentCatId && <Item press= {() => props.navigation.push('SubCats', getSubCatsContent(props.data, item.contentCatId))} title= {item.catName} itemStyle= {styles.itemStyle} itemTitleStyle= {styles.itemTitleStyle}/>}
            keyExtractor= {item => item.contentCatId.toString()}
          />
      </View>
    )
  } else {
    return (
      <Text> data loading </Text>
    )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    width: Dimensions.get('window').width,
  },
  listStyle: {
    flex: 1,
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

export default connect(state => ({data: dive`${state}promise.categories.payload.data.searchResult.element`}), {getCategories})(Categories)
