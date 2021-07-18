import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { green, ligthOrange } from '../utils/colors'
import MyButton from './MyButton'
import TextValidation from './TextValidation'

export default function AddQuestion ({ navigation }) {
  const [questionText, setQuestionText] = useState('')
  const [errorQuestion, setErrorQuestion] = useState('')
  const [answerText, setAnswerText] = useState('')
  const [errorAnswer, setErrorAnswer] = useState('')
  const [alreadyValidate, setAlreadyValidate] = useState(false)

  const validateQuestion = (value) => {
    value === '' ? setErrorQuestion('You need to enter a question!') : setErrorQuestion('')
    if (value !== '') {
      navigation.navigate('Detail')
    }
  }

  const validateAnswer = (value) => {
    value === '' ? setErrorAnswer('The answer can\'t be empty!') : setErrorAnswer('')
  }
  const onSubmit = () => {
    validateAnswer(answerText)
    validateQuestion(questionText)
    setAlreadyValidate(true)
  }

  const onChangeQuestion = (value) => {
    setQuestionText(value)
    console.log('onChangeQuestion', value + ' ' + alreadyValidate)
    if (alreadyValidate) {
      validateQuestion(value)
    }
  }

  const onChangeAnswer = (value) => {
    setAnswerText(value)
    if (alreadyValidate) {
      validateAnswer(value)
    }
  }

  return (
    <View style={styles.container}>
      <TextValidation
        label="Question"
        onChangeText={onChangeQuestion}
        value={questionText}
        placeholder="Enter the question here!"
        errorValidation={errorQuestion}
      />
      <TextValidation
        label="Answer"
        onChangeText={onChangeAnswer}
        value={answerText}
        placeholder="Enter the answer here!"
        errorValidation={errorAnswer}
      />
      <MyButton
        label="Submit"
        onPress={onSubmit}
        color={green}
      />
    </View>
  )
}

AddQuestion.propTypes = {
  navigation: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ligthOrange
  }
})
