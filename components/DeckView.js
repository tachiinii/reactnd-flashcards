import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ActionButton from './ActionButton'
import TextButton from './TextButton'

export default class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('deck').name
    }
  }

  render() {
    const { deck } = this.props.navigation.state.params
    const cardCount = Object.keys(deck.cards).length
    return <View>
      <Text>{deck.name}</Text>
      <Text>{cardCount} cards</Text>
      <ActionButton
        label='Add Card'
        onPress={() => this.props.navigation.navigate('AddCard', {deck})}
      />
      <ActionButton
        label='Start Quiz'
        onPress={() => this.props.navigation.navigate('Quiz', {deck})}
        disabled={cardCount > 0 ? false : true}
      />
      <TextButton>Delete deck</TextButton>
    </View>
  }
}
