import React, { useState, useRef, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import PropTypes from 'prop-types'
import { green, orange } from '../utils/colors'

export default function ShowQuestion ({ questionText, answerText, reset }) {
  const [recto, setRecto] = useState(true)
  let returnValue = 0
  const animateValue = useRef(new Animated.Value(0)).current
  animateValue.addListener(({ value }) => {
    returnValue = value
  })
  useEffect(() => {
    setRecto(true)
    animateValue.setValue(0)
  }, [reset])

  const frontInterpolate = animateValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  })
  const backInterpolate = animateValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '0deg']
  })

  const frontAnimatedStyle = {
    transform: [
      { rotateY: frontInterpolate }
    ]
  }

  const backAnimatedStyle = {
    transform: [
      { rotateY: backInterpolate }
    ]
  }

  const onChange = () => {
    setRecto(!recto)
    if (returnValue >= 90) {
      Animated.spring(
        animateValue,
        {
          toValue: 0,
          friction: 8,
          tension: 10,
          useNativeDriver: true
        }
      ).start()
    } else {
      Animated.timing(
        animateValue,
        {
          toValue: 180,
          friction: 8,
          tension: 10,
          useNativeDriver: true
        }
      ).start()
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.flip}>
        <Animated.View
          style={[styles.flipCard, frontAnimatedStyle]}
          >
          <Text style={styles.mainText}>
            {questionText}
          </Text>
        </Animated.View>
        <Animated.View
          style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}
          >
          <Text style={styles.mainText}>
            {answerText}
          </Text>
        </Animated.View>
      </View>
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
  flip: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60
  },
  flipCard: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: green,
    padding: 20,
    width: '80%',
    maxHeight: 300,
    borderRadius: 10,
    backfaceVisibility: 'hidden'
  },
  flipCardBack: {
    position: 'absolute',
    backgroundColor: orange
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
  reset: PropTypes.bool
}
