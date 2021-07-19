import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { green, ligthOrange } from '../utils/colors'
import MyButton from './MyButton'
import TextValidation from './TextValidation'
import { addCardToDesk } from '../utils/api'
import { addCard } from '../actions'

function AddQuestion ({ navigation, route }) {
  const [questionText, setQuestionText] = useState('')
  const [errorQuestion, setErrorQuestion] = useState('')
  const [answerText, setAnswerText] = useState('')
  const [errorAnswer, setErrorAnswer] = useState('')
  const [alreadyValidate, setAlreadyValidate] = useState(false)

  const { deskTitle } = route.params
  const dispatch = useDispatch()

  const validateQuestion = (value) => {
    if (value === '') {
      setErrorQuestion('You need to enter a question!')
      return false
    }
    setErrorQuestion('')
    return true
  }

  const validateAnswer = (value) => {
    if (value === '') {
      setErrorAnswer('The answer can\'t be empty!')
      return false
    }
    setErrorAnswer('')
    return true
  }
  const onSubmit = () => {
    let valide = true
    valide &= validateAnswer(answerText)
    valide &= validateQuestion(questionText)
    setAlreadyValidate(true)
    if (valide) {
      addCardToDesk(deskTitle, {
        question: questionText,
        answer: answerText
      })

      dispatch(addCard(deskTitle, {
        question: questionText,
        answer: answerText
      }))

      navigation.navigate('Detail', {
        deskTitle: deskTitle
      })
    }
  }

  const onChangeQuestion = (value) => {
    setQuestionText(value)
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
  route: PropTypes.shape({
    params: PropTypes.object
  }),
  navigation: PropTypes.object
}

export default connect()(AddQuestion)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ligthOrange
  }
})
