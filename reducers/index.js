import {
  RECEIVE_DECKS,
  ADD_DECK,
  DELETE_DECK,
  ADD_CARD,
  UPDATE_QUIZ
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
      const decks = Object.keys(state)
          .filter(id => id !== action.deckId)
          .reduce((result, current) => {
            result[current] = state[current];
            return result;
          }, {})

      return {
        ...decks
      }
    case ADD_CARD :
      ({ card, deckId } = action)
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
    case UPDATE_QUIZ :
      ({ quiz, deckId } = action)
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          quiz
        }
      }
    default :
      return state
  }
}
