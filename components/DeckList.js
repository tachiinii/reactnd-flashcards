import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gray, green, white } from '../utils/colors'
import TextButton from './TextButton'

export default class DeckList extends Component {
  render() {
    const { decks } = this.props

    return (
      <View>
        {Object.keys(decks).map((deckId) => {
          deck = decks[deckId]
          cardCount = Object.keys(deck.cards).length
          const { navigation } = this.props

          return (
            <View key={deckId} style={styles.deckItem}>
              <TextButton style={styles.deckName} onPress={
                () => navigation.navigate('DeckView', {deck: decks[deckId]})
              }>
                {deck.name}
              </TextButton>
              <Text style={styles.deckDetails}>
                {cardCount} {cardCount === 1 ? 'card' : 'cards'} / Quiz: {deck.quiz.updated
                  ? `${deck.quiz.score}%`
                  : 'none'
                }
              </Text>
            </View>
        )})}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckItem: {
    borderWidth: 1,
    borderColor: gray,
    backgroundColor: white,
    padding: 12,
    marginBottom: 12
  },
  deckName: {
    fontSize: 22,
    fontWeight: '700',
    color: green
  },
  deckDetails: {
    fontSize: 14,
    textAlign: 'center'
  }
})
