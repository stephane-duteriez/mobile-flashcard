import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default function MyButton({ label, onPress, color }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
      <Text>
        { label }
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  }
})

MyButton.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  color: PropTypes.string
}
