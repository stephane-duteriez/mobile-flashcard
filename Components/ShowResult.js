import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import { lightGreen, darkGreen, green, orange } from '../utils/colors'
import MyButton from './MyButton'

export default function ShowResult ({ correctAnswers, nbrQuestions, onPressRetry }) {
  const navigation = useNavigation()
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
            {nbrQuestions}
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
            onPress={onPressRetry}
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

ShowResult.propTypes = {
  onPressRetry: PropTypes.func,
  nbrQuestions: PropTypes.number,
  correctAnswers: PropTypes.number
}
