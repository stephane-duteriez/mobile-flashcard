import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import { deleteDeck } from '../utils/api'
import { removeDeck } from '../actions'

function DeckCard ({ title, nbrCards }) {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  function onPress (title) {
    navigation.navigate('Detail', {
      deskTitle: title
    })
  }

  const onPressDelet = () => {
    deleteDeck(title)
    dispatch(removeDeck(title))
  }

  return (
    <TouchableOpacity
      onPress={() => onPress(title)}
      >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>{`${nbrCards} cards`}</Text>
        <TouchableOpacity onPress={onPressDelet}>
          <MaterialIcons name="delete" size={24} color="black" />
        </TouchableOpacity>
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

export default connect()(DeckCard)
