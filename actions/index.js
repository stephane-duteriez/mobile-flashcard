export const RECEIVE_DATA = 'RECEIVE_DATA'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function receiveData (decks) {
  return {
    type: RECEIVE_DATA,
    decks
  }
}

export function addDeck (nom) {
  return {
    type: ADD_DECK,
    nom
  }
}

export function addCard (name, card) {
  return {
    type: ADD_CARD,
    name,
    card
  }
}
