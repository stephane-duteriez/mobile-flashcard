import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import { connect, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import ShowQuestion from './ShowQuestion'
import MyButton from './MyButton'
import { darkGreen, green, lightGreen, orange } from '../utils/colors'
import { Ionicons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'

function Quiz ({ navigation, route }) {
  const [index, setIndex] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [reset, setReset] = useState(Math.random())

  const { deskTitle } = route.params

  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }
    ).start()
  }, [index])

  const questions = useSelector((decks) => {
    return decks[deskTitle].questions
  })

  const result = (correct) => {
    fadeAnim.setValue(0)
    setCorrectAnswers(correct ? correctAnswers + 1 : correctAnswers)
    setReset(Math.random)
    Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: 50,
        useNativeDriver: true
      }
    ).start(() => {
      setIndex(index + 1)
    })
  }

  if (index !== questions.length) {
    return (
      <Animated.View style={[styles.container, {
        opacity: fadeAnim
      }]}>
        <ShowQuestion
          questionText={questions[index].question}
          answerText={questions[index].answer}
          reset={reset}
         />
        <View style={{ flexDirection: 'row' }}>
          <MyButton
            label="Correct"
            Icon={() => <Ionicons name="md-thumbs-up" size={24} color="black" />}
            onPress={() => result(true)}
            color={green}/>
          <MyButton
            label="Incorrect"
            Icon={() => <Ionicons name="md-thumbs-down" size={24} color="black" />}
            onPress={() => result(false)}
            color={orange}/>
        </View>
      </Animated.View>
    )
  }

  clearLocalNotification()
    .then(setLocalNotification)
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <View style={[styles.subResult, {
          borderBottomColor: darkGreen,
          borderBottomWidth: 2
        }]}>
          <Text style={styles.text}>
            {correctAnswers}
          </Text>
        </View>
        <View style={styles.subResult}>
          <Text style={styles.text}>
            {questions.length}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
          <MyButton
            label="Return to Deck"
            onPress={() => navigation.navigate('Detail')}
            Icon={() => <Entypo name="back" size={24} color="black" />}
            color={green}/>
          <MyButton
            label="Retry the quiz"
            Icon={() => <MaterialCommunityIcons name="restart" size={24} color="black" />}
            onPress={() => {
              setIndex(0)
              setCorrectAnswers(0)
            }}
            color={orange}/>
        </View>
    </View>
  )
}

export default connect()(Quiz)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  result: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: lightGreen,
    justifyContent: 'center'
  },
  subResult: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 40,
    textAlign: 'center'
  }
})

Quiz.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.object
  }),
  navigation: PropTypes.object
}
