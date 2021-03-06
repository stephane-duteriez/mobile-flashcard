import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import PropTypes from 'prop-types'

export default function TextValidation ({ errorValidation, label, ...props }) {
  return (
    <View style={styles.container}>
      {label && (<Text style={styles.label}>{label}</Text>)}
      <TextInput
        style={[styles.input, { borderColor: errorValidation !== '' ? 'red' : 'grey' }]}
        {...props}
      />
      <Text style={{ color: 'red' }}>
        {errorValidation}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  input: {
    height: 40,
    marginVertical: 5,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 5,
    fontSize: 24,
    width: '80%'
  },
  label: {
    fontSize: 18
  }
})

TextValidation.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  errorValidation: PropTypes.string
}
