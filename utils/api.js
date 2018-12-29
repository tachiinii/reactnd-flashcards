export function fetchDecks() {
  return {
    decks: {
      '123456': {
        id: '123456',
        created: 1545793200,
        name: 'First API Deck',
        cards: {
          '123': {
            id: '123',
            created: 1545793215,
            question: 'Q1',
            answer: 'A1'
          },
          '124': {
            id: '124',
            created: 1545793230,
            question: 'Q2',
            answer: 'A2'
          }
        }
      },
      '123457': {
        id: '123457',
        name: 'Deck Numero Dos de API',
        cards: {}
      }
    }
  }
}
