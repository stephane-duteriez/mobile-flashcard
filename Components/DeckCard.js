import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function DeckCard () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deck 1</Text>
      <Text style={styles.info}>3 cards</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    height: 100,
    margin: 20,
    padding: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 24
  },
  info: {
    color: 'gray'
  }
})
