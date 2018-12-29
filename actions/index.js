export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'

export function receiveDecks() {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function deleteDeck(deckId) {
  return {
    type: RECEIVE_DECKS,
    deckId
  }
}
