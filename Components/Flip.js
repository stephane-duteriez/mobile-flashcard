import React, { useRef, useEffect } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import PropTypes from 'prop-types'
import { green, orange } from '../utils/colors'

export default function Flip ({ recto, front, back, reset }) {
  const animateValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
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

  useEffect(() => {
    if (recto) {
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
  }, [recto])

  return (
    <View style={styles.flip}>
      <Animated.View
        style={[styles.flipCard, frontAnimatedStyle]}
        >
        { front() }
      </Animated.View>
      <Animated.View
        style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}
        >
          { back() }
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
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
  }
})

Flip.propTypes = {
  front: PropTypes.func,
  back: PropTypes.func,
  reset: PropTypes.number,
  recto: PropTypes.bool,
  onChangeRecto: PropTypes.func
}
