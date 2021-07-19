import React, { useState, useRef, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import PropTypes from 'prop-types'
import { green, orange } from '../utils/colors'

export default function ShowQuestion ({ questionText, answerText }) {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const [recto, setRecto] = useState(true)

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }
    ).start()
  }, [recto])

  return (
    <View style={styles.container}>
      <Animated.View
      style={
        [
          styles.animated,
          {
            transform: [
              { scaleX: fadeAnim }
            ]
          }
        ]}>
        <Text style={styles.mainText}>
          {recto ? questionText : answerText}
        </Text>
      </Animated.View>
      <TouchableOpacity
        onPress={() => {
          // Animated.timing(
          //   fadeAnim,
          //   {
          //     toValue: 0,
          //     duration: 1000,
          //     useNativeDriver: true
          //   }
          // ).start(() => {
          //   setRecto(!recto)
          // })
          fadeAnim.setValue(0)
          setRecto(!recto)
        }}
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
  animated: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: green,
    padding: 20,
    width: '80%',
    borderRadius: 10
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
