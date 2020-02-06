import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, StyleSheet, View, Dimensions } from 'react-native';

const MyModal = props => {

    return (
      <View>
        <Modal
          style= {styles.modal}
          animationType= 'slide'
          transparent= {true}
          visible={props.visible}
          onRequestClose={props.closeModal}>
          <View style= {styles.modalMessage}>
              <Text>{props.message}</Text>
              <TouchableOpacity
                style= {styles.modalButton}
                onPress={props.closeModal}>
                <Text>Close</Text>
              </TouchableOpacity>
          </View>
        </Modal>
      </View>
    )
}

export default MyModal

const styles = StyleSheet.create({
  modal: {
    position: 'relative',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalMessage: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '50%',
    top: '40%',
    width: 230,
    height: 100,
    borderWidth: 0.5,
    borderColor: '#000000',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  modalButton: {
    width: 50,
    height: 25,
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: '#7c7c7c',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
