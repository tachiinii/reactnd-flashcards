import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { green } from '../utils/colors'
import baseStyles from '../utils/baseStyles'
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
    return <View style={baseStyles.container}>
      <Text style={styles.deckName}>{deck.name}</Text>
      <Text style={styles.deckDetails}>{cardCount} cards</Text>
      <ActionButton
        label='Add Card'
        onPress={() => this.props.navigation.navigate('AddCardView', {deck})}
      />
      <ActionButton
        label='Start Quiz'
        onPress={() => this.props.navigation.navigate('QuizView', {deck})}
        disabled={cardCount > 0 ? false : true}
      />
      <TextButton style={{marginTop: 12}}>
        Delete deck
      </TextButton>
    </View>
  }
}

const styles = StyleSheet.create({
  deckName: {
    marginTop: 30,
    fontSize: 32,
    fontWeight: '700',
    color: green,
    textAlign: 'center'
  },
  deckDetails: {
    margin: 12,
    fontSize: 18,
    textAlign: 'center'
  }
})
