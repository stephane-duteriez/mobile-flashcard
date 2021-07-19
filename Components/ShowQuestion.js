import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { orange } from '../utils/colors'

export default function ShowQuestion ({ questionText, answerText }) {
  const [recto, setRecto] = useState(true)
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        {recto ? questionText : answerText}
      </Text>
      <TouchableOpacity
         onPress={ () => setRecto(!recto)}
      >
        <Text style={styles.button}>{recto ? 'Answer' : 'Question'}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 24,
    textAlign: 'center'
  },
  button: {
    color: orange
  }
})

ShowQuestion.propTypes = {
  questionText: PropTypes.string,
  answerText: PropTypes.string
}
