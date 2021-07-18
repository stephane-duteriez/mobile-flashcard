import { RECEIVE_DATA, ADD_DECK, ADD_CARD } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA :
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK :
      return {
        ...state,
        [action.name]: {
          title: action.name,
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
    default:
      return state
  }
}

export default decks
