import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { Entypo } from '@expo/vector-icons'
import DeckCard from './DeckCard'
import { green, darkOrange } from '../utils/colors'

export default function Home ({ navigation }) {
  function onPress () {
    navigation.navigate('AddDeck')
  }

  return (
    <View style={styles.container}>
      <DeckCard />
      <TouchableOpacity
      onPress={onPress}
      style={styles.floatingButton}
        >
        <Entypo name="plus" size={36} color="black" />
      </TouchableOpacity>
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
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    alignSelf: 'flex-end',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: darkOrange,
    borderRadius: 25,
    paddingTop: 5,
    height: 50,
    width: 50
  }
})