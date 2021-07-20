import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import { connect, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import ShowQuestion from './ShowQuestion'
import MyButton from './MyButton'
import { green, lightGreen, orange } from '../utils/colors'
import { Ionicons } from '@expo/vector-icons'
import { setLocalNotification, clearLocalNotification, shuffleArray } from '../utils/helpers'
import ShowResult from './ShowResult'

function Quiz ({ route }) {
  const [index, setIndex] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [randomQuestion, setRandomQuestion] = useState([])
  const [reset, setReset] = useState(Math.random())

  const { deskTitle } = route.params

  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }
    ).start()
  }, [index])

  const questions = useSelector((decks) => {
    return decks[deskTitle].questions
  })
  useEffect(() => {
    setRandomQuestion(shuffleArray(questions))
  }, [])
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
  const nbrQuestionsRemaining = randomQuestion.length - index
  console.log('before render', randomQuestion)
  if (randomQuestion.length === 0) {
    return (null)
  }
  if (index !== randomQuestion.length) {
    return (
      <Animated.View style={[styles.container, {
        opacity: fadeAnim
      }]}>
        <View style={styles.remainingContainer}>
          <Text style={styles.remaining}>
            {`${nbrQuestionsRemaining} question${nbrQuestionsRemaining > 1 ? 's' : ''} left`}
          </Text>
        </View>
        <ShowQuestion
          questionText={randomQuestion[index].question}
          answerText={randomQuestion[index].answer}
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
  // we pass one deck of cards, we can reset the notification for the following day
  clearLocalNotification()
    .then(setLocalNotification)
  return (
    <ShowResult
      onPressRetry={() => {
        setIndex(0)
        setCorrectAnswers(0)
        console.log('before SHuffle', questions)
        setRandomQuestion(shuffleArray(questions))
      }}
      nbrQuestions={questions.length}
      correctAnswers={correctAnswers}
    />
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
  },
  remaining: {
    fontSize: 18
  },
  remainingContainer: {
    position: 'absolute',
    bottom: 30,
    left: 30
  }
})

Quiz.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.object
  })
}
