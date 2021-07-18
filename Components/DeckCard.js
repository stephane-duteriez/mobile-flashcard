import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function DeckCard () {
  const navigation = useNavigation()

  function onPress () {
    navigation.navigate('Detail', {
      idDeck: 'Deck_1'
    })
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      >
      <View style={styles.container}>
        <Text style={styles.title}>Deck 1</Text>
        <Text style={styles.info}>3 cards</Text>
      </View>
    </TouchableOpacity>
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
