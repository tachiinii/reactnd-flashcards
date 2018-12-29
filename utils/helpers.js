export function getPercent(partial, total) {
  return Math.round((partial / total) * 100)
}

export function formatDeck (deckName) {
  const deckId = _generateId()

  return {
    [deckId]: {
      id: deckId,
      timestamp: Date.now(),
      name: deckName,
      cards: {}
    }
  }
}

function _generateId () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
