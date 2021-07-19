import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default function MyButton ({ label, onPress, color, Icon }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
      <View style={styles.main}>
        {Icon && <Icon />}
        <Text>
          { label }
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center'
  },
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
  color: PropTypes.string,
  Icon: PropTypes.func
}
