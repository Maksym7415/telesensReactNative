import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { dive, getSubCatsContent } from '../../../functions'
import { connect } from 'react-redux'
import { ItemContent, ListFlat } from '../../components/flatList'
import { getContent } from '../../../redux/reducers/actions'


const Content = props => {

  useEffect(() => {
    props.getContent(props.navigation.state.params)
  }, [])

  if (props.data) {
    return (
      <View style= {styles.container}>
        <ListFlat
          data= {props.data }
          renderItem= {({ item }) => <ItemContent press= {() => props.navigation.push('SongInfo', item)} itemStyle= {styles.itemContainer} imgStyle= {styles.image} src= {`https://t-rbt.telesens.ua/t-rbt/image?id=${item.imageId}`} title= {item.title} artist= {item.artist} price= {item.amountOnetime} />}
          keyExtractor= {item => item.contentNo.toString()}
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
    flexDirection: 'column',
    width: Dimensions.get('window').width,

  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    width: Dimensions.get('window').width,
    borderWidth: 0.5,
    borderColor: '#4d4d4d',
    backgroundColor: '#bababa',
    marginVertical: 2,
    marginHorizontal: 1
  },
  image: {
    width: 80,
    height: 80,
  }
})

export default connect(state => ({data: dive`${state}promise.content.payload.data.searchResult.element`}), {getContent})(Content)
