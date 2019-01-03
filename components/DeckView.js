import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { connect } from 'react-redux'
import { deleteDeck } from '../actions'
import { removeDeck } from '../utils/api'
import { green } from '../utils/colors'
import baseStyles from '../utils/baseStyles'
import ActionButton from './ActionButton'
import TextButton from './TextButton'

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('deck').name
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.deck !== undefined
  }

  handleDelete = (deckId) => {
    Alert.alert(
      'Delete Deck',
      'Are you sure you want to delete?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK', onPress: () => this.doDelete(deckId)},
      ],
      { cancelable: false }
    )
  }

  doDelete = (deckId) => {
    this.props.dispatch(
      deleteDeck(deckId)
    )
    removeDeck(deckId)
    this.props.navigation.navigate('DeckListView')
  }

  render() {
    const { deck } = this.props
    const cardCount = Object.keys(deck.cards).length

    return <View style={baseStyles.container}>
      <Text style={styles.deckName}>{deck.name}</Text>
      <Text style={styles.deckDetails}>
        {cardCount} {cardCount === 1 ? 'card' : 'cards'}
      </Text>
      <ActionButton
        label='Add Card'
        onPress={() => this.props.navigation.navigate('AddCardView', {deck})}
      />
      <Text style={styles.deckDetails}>
      {deck.quiz.updated
        ? `Last quiz: ${deck.quiz.score}% on ${new Date(deck.quiz.updated).toDateString()}`
        : 'Quiz not completed'
      }
      </Text>
      <ActionButton
        label='Start Quiz'
        onPress={() => this.props.navigation.navigate('QuizView', {deck})}
        disabled={cardCount > 0 ? false : true}
      />
      <TextButton
        style={{marginTop: 12}}
        onPress={() => this.handleDelete(deck.id)}
      >
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

function mapStateToProps(decks, { navigation }) {
  const { deck } = navigation.state.params
  return {
    deck: decks[deck.id]
  }
}

export default connect(mapStateToProps)(DeckView)
