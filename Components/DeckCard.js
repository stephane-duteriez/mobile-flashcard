import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'

export default function DeckCard ({ title, nbrCards }) {
  const navigation = useNavigation()

  function onPress (title) {
    navigation.navigate('Detail', {
      idDeck: title
    })
  }

  return (
    <TouchableOpacity
      onPress={() => onPress(title)}
      >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>{`${nbrCards} cards`}</Text>
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

DeckCard.propTypes = {
  title: PropTypes.string,
  nbrCards: PropTypes.number
}
