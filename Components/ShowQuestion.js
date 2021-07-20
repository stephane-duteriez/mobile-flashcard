import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { orange } from '../utils/colors'
import Flip from './Flip'

export default function ShowQuestion ({ questionText, answerText, reset }) {
  const [recto, setRecto] = useState(true)

  useEffect(() => {
    setRecto(true)
  }, [reset])

  const onChange = () => {
    setRecto(!recto)
  }
  return (
    <View style={styles.container}>
      <Flip
        front={() => (
          <Text style={styles.mainText}>
            {questionText}
          </Text>)}
        back={() => (
          <Text style={styles.mainText}>
            {answerText}
          </Text>
        )}
        recto={recto}
        reset={reset}
      />
      <TouchableOpacity
        onPress={onChange}
      >
        <Text style={styles.button}>{recto ? 'Answer' : 'Question'}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
  answerText: PropTypes.string,
  reset: PropTypes.number
}
