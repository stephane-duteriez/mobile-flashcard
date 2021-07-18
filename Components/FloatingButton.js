import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { darkOrange } from '../utils/colors'

export default function FloatingButton ({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.floatingButton}
        >
        <Entypo name="plus" size={36} color="black" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    alignSelf: 'flex-end',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: darkOrange,
    borderRadius: 25,
    paddingTop: 5,
    height: 50,
    width: 50
  }
})

FloatingButton.propTypes = {
  onPress: PropTypes.func
}
