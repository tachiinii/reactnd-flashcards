export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const ADD_CARD = 'ADD_CARD'
export const UPDATE_QUIZ = 'UPDATE_QUIZ'

export function receiveDecks(decks) {
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
    type: DELETE_DECK,
    deckId
  }
}

export function addCard(card, deckId) {
  return {
    type: ADD_CARD,
    card,
    deckId
  }
}

export function updateQuiz(quiz, deckId) {
  return {
    type: UPDATE_QUIZ,
    quiz,
    deckId
  }
}
