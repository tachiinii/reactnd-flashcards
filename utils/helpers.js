export function getPercent(partial, total) {
  return Math.round((partial / total) * 100)
}

export function formatDeck (deckName) {
  const deckId = _generateId()

  return {
    [deckId]: {
      id: deckId,
      created: Date.now(),
      name: deckName,
      quiz: {},
      cards: {}
    }
  }
}

export function formatCard (question, answer) {
  const cardId = _generateId()

  return {
    [cardId]: {
      id: cardId,
      created: Date.now(),
      question: question,
      answer: answer
    }
  }
}

function _generateId () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
