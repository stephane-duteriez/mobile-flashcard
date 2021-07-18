import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import MyButton from './MyButton'
import { lightGreen, green } from '../utils/colors'
import FloatingButton from './FloatingButton'
export default function Detail ({ route, navigation }) {
  const { idDeck } = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {idDeck}
      </Text>
      <Text style={styles.info}>
        3 cards
      </Text>
      <MyButton
        label= "Start Quiz"
        color={lightGreen}
        onPress={() => navigation.navigate('Quiz')}
      />
      <FloatingButton
        onPress={() => navigation.navigate('AddQuestion')} />
    </View>
  )
}

Detail.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.object
  }),
  navigation: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: green
  },
  title: {
    fontSize: 32
  },
  info: {
    fontSize: 24,
    color: 'grey'
  }
})
