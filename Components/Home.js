import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import DeckCard from './DeckCard'
import { green } from '../utils/colors'
import FloatingButton from './FloatingButton'

export default function Home ({ navigation }) {
  function onPress () {
    navigation.navigate('AddDeck')
  }

  return (
    <View style={styles.container}>
      <DeckCard />
      <FloatingButton
        onPress={onPress} />
    </View>
  )
}

Home.propTypes = {
  navigation: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: green
  }
})
