import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import ShowQuestion from './ShowQuestion'
import MyButton from './MyButton'
import { green, orange } from '../utils/colors'

export default function Quiz ({ navigation }) {
  const [index, setIndex] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const questions = [
    {
      question: 'What is React?',
      answer: 'A library for managing user interfaces'
    },
    {
      question: 'Where do you make Ajax requests in React?',
      answer: 'The componentDidMount lifecycle event'
    }
  ]
  const result = (correct) => {
    setCorrectAnswers(correct ? correctAnswers + 1 : correctAnswers)
    console.log('result', correctAnswers)
    setIndex(index + 1)
  }
  if (index !== questions.length) {
    return (
      <View style={styles.container}>
        <ShowQuestion
          questionText={questions[index].question}
          answerText={questions[index].answer}
         />
        <View style={{ flexDirection: 'row' }}>
          <MyButton
            label="Correct"
            onPress={() => result(true)}
            color={green}/>
          <MyButton
            label="Incorrect"
            onPress={() => result(false)}
            color={orange}/>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text>
         {`You have ${correctAnswers} answers on ${questions.length}`}
      </Text>
      <View style={{ flexDirection: 'row' }}>
          <MyButton
            label="Return to Deck"
            onPress={() => navigation.navigate('Detail')}
            color={green}/>
          <MyButton
            label="Retry the quiz"
            onPress={() => {
              setIndex(0)
              setCorrectAnswers(0)
            }}
            color={orange}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

Quiz.propTypes = {
  navigation: PropTypes.object
}
