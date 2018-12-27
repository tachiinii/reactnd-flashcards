import React, { Component } from 'react'
import { View, Text } from 'react-native'
import TextButton from './TextButton'

export default class DeckList extends Component {
  render() {
    const { decks } = this.props

    return (
      <View>
        {Object.keys(decks).map((deckId) => (
          <View key={deckId}>
            <TextButton onPress={() => this.props.navigation.navigate('DeckView', {deck: decks[deckId]})}>
              {decks[deckId].name}
            </TextButton>
            <Text>{Object.keys(decks[deckId].cards).length} cards</Text>
          </View>
        ))}
      </View>
    )
  }
}


