import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import ShowQuestion from './ShowQuestion'
import MyButton from './MyButton'
import { green, orange } from '../utils/colors'

function Quiz ({ navigation, route }) {
  const [index, setIndex] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const { deskTitle } = route.params

  const questions = useSelector((decks) => {
    return decks[deskTitle].questions
  })

  const result = (correct) => {
    setCorrectAnswers(correct ? correctAnswers + 1 : correctAnswers)
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

export default connect()(Quiz)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

Quiz.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.object
  }),
  navigation: PropTypes.object
}
