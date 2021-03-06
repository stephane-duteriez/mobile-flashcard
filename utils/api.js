import AsyncStorage from '@react-native-async-storage/async-storage'

export const MOBILE_FLASHCARD_KEY = 'mobileflashcard:data'

const initialData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function setInitialData () {
  return AsyncStorage.getItem(MOBILE_FLASHCARD_KEY)
    .then((result) => {
      if (!result) {
        AsyncStorage.setItem(MOBILE_FLASHCARD_KEY, JSON.stringify(initialData))
      }
      return (result ? JSON.parse(result) : initialData)
    })
}

export function getDecks () {
  return AsyncStorage.getItem(MOBILE_FLASHCARD_KEY)
}

export function getDeck (name) {
  return AsyncStorage.getItem(MOBILE_FLASHCARD_KEY)
    .then((results) => {
      return results[name]
    })
}

export function saveDeckTitle (name) {
  getDecks().then(JSON.parse)
    .then((decks) => {
      if (!decks[name]) {
        return AsyncStorage.mergeItem(MOBILE_FLASHCARD_KEY, JSON.stringify({
          [name]: {
            title: name,
            questions: []
          }
        }))
      }
    })
}

export function deleteDeck (name) {
  getDecks().then(JSON.parse)
    .then((decks) => {
      if (decks[name]) {
        const tmpDecks = { ...decks }
        delete tmpDecks[name]
        // To remove a deck we have to extract all the decks and add them back
        AsyncStorage.setItem(MOBILE_FLASHCARD_KEY, JSON.stringify(tmpDecks))
      }
    })
}

export function addCardToDesk (name, card) {
  getDecks()
    .then(JSON.parse)
    .then((decks) => {
      if (decks[name]) {
        const tmpDeck = {
          [name]: {
            questions: [
              ...decks[name].questions,
              card
            ]
          }
        }
        return AsyncStorage.mergeItem(MOBILE_FLASHCARD_KEY, JSON.stringify(tmpDeck))
      }
    })
}
