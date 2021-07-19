import React, { useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { connect, useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import DeckCard from './DeckCard'
import { green } from '../utils/colors'
import FloatingButton from './FloatingButton'
import { setInitialData } from '../utils/api'
import { receiveData } from '../actions'

function Home ({ navigation }) {
  const dispatch = useDispatch()
  const decks = useSelector((decks) => {
    return decks
  })

  function onPress () {
    navigation.navigate('AddDeck')
  }

  useEffect(() => {
    setInitialData()
      .then((decks) => dispatch(receiveData(decks)))
  }, [])

  const arrayDecks = Object.keys(decks).map((deckTitle) => {
    return {
      key: deckTitle,
      title: decks[deckTitle].title,
      nbrCards: decks[deckTitle].questions.length
    }
  })

  return (
    <View style={styles.container}>
      <FlatList
         data={arrayDecks}
         renderItem={({ item }) => <DeckCard title={item.title} nbrCards={item.nbrCards} />}
      />
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

export default connect()(Home)
