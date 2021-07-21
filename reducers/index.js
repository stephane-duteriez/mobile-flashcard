import { RECEIVE_DATA, ADD_DECK, ADD_CARD, REMOVE_DECK } from '../actions'

function decks (state = {}, action) {
  const tmpState = { ...state }
  switch (action.type) {
    case RECEIVE_DATA :
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK :
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      }
    case ADD_CARD :
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          questions: [
            ...state[action.name].questions,
            action.card
          ]
        }
      }
    case REMOVE_DECK :
      if (tmpState[action.title]) {
        delete tmpState[action.title]
      }
      return tmpState
    default:
      return state
  }
}

export default decks
