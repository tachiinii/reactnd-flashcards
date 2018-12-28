import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gray, green, white } from '../utils/colors'
import TextButton from './TextButton'

export default class DeckList extends Component {
  render() {
    const { decks } = this.props

    return (
      <View>
        {Object.keys(decks).map((deckId) => (
          <View key={deckId} style={styles.deckItem}>
            <TextButton style={styles.deckName} onPress={() => this.props.navigation.navigate('DeckView', {deck: decks[deckId]})}>
              {decks[deckId].name}
            </TextButton>
            <Text style={styles.deckDetails}>{Object.keys(decks[deckId].cards).length} cards</Text>
          </View>
        ))}
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
