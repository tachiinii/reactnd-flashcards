import {
  RECEIVE_DECKS,
  ADD_DECK,
  DELETE_DECK,
  ADD_CARD
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
    case ADD_CARD :
      const { card, deckId } = action
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          cards: {
            ...state[deckId].cards,
            ...card
          }
        }
      }
    default :
      return state
  }
}
