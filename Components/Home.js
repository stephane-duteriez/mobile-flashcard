import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import DeckCard from './DeckCard'
import { green, darkOrange } from '../utils/colors'

export default function Home () {
  function onPress () {
    console.log('OnPress')
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
