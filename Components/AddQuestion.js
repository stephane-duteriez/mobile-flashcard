import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { green, ligthOrange } from '../utils/colors'
import MyButton from './MyButton'
import TextValidation from './TextValidation'

export default function AddQuestion () {
  const [questionText, setQuestionText] = useState('')
  const [errorQuestion, setErrorQuestion] = useState('')
  const [answerText, setAnswerText] = useState('')
  const [errorAnswer, setErrorAnswer] = useState('')
  const [alreadyValidate, setAlreadyValidate] = useState(false)

  const validateQuestion = (value) => {
    value === '' ? setErrorQuestion('You need to enter a question!') : setErrorQuestion('')
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
      <Text>AddQuestion</Text>
      <TextValidation
        onChangeText={onChangeQuestion}
        value={questionText}
        placeholder="Enter the question here!"
        errorValidation={errorQuestion}
      />
      <TextValidation
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ligthOrange
  }
})
