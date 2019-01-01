import { AsyncStorage } from 'react-native'

const FLASHCARDS_STORAGE_KEY = 'FlashCards:decks'

export function fetchDecks() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => JSON.parse(results)
    )
}

export function saveDeck(deck) {
  return AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_KEY,
    JSON.stringify(deck)
    )
}

export function removeDeck(key) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(
        FLASHCARDS_STORAGE_KEY,
        JSON.stringify(data)
      )
    })
}
