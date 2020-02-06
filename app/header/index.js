import React, { useEffect } from 'react'
import { StyleSheet, View, Button, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../../redux/reducers/actions'
import { dive } from '../../functions'

const Header = props => {
  return (
    <View style= {styles.container}>
        <Text style= {{fontSize: 20}}>
          T-RBT
        </Text>
          <View style= {{width: 50, height: 50}}>
          {props.data ? <TouchableOpacity onPress= {() => props.logout()}>
                            <Image
                              style= {{width: 30, height: 30}}
                              source= {require('../../images/logout.png')}
                            />
                        </TouchableOpacity> :
                        <TouchableOpacity  onPress= {props.login}>
                            <Image
                              style= {{width: 30, height: 30}}
                              source= {require('../../images/enter.png')}
                            />
                        </TouchableOpacity>}
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#32d06b',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  }
})

export default connect(state => ({data: dive`${state}authorization.payload.data`}), {logout}) (Header)
