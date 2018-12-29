import {
  RECEIVE_DECKS,
  ADD_DECK,
  DELETE_DECK
} from '../actions'

export default function decks(state = {}, action) {
  switch(action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK :
      return {
        ...state,
        ...action.deck
      }
    case DELETE_DECK :
      const { [action.deckId]: value, ...decks } = state
      return {
        decks
      }
    default :
      return state
  }
}
