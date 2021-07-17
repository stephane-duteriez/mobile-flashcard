import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import MyButton from './MyButton';
import { lightGreen, green } from '../utils/colors';
export default function Detail ({ route }) {
  const { idDeck } = route.params;
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
      />
    </View>
  )
}

Detail.propTypes = {
  route: PropTypes.objectOf({
    params: PropTypes.object
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: green,
  },
  title: {
    fontSize: 32
  },
  info: {
    fontSize: 24,
    color: 'grey'
  }
})
