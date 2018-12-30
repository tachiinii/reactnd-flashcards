import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { deleteDeck } from '../actions'
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

  handleDelete = (deckId) => {
    console.log('Deleting: ', deckId)
  }

  render() {
    const { deck } = this.props
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

function mapStateToProps(decks, props) {
  return {
    deck: decks[props.navigation.state.params.deck.id]
  }
}

export default connect(mapStateToProps)(DeckView)
