import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gray, green, white } from '../utils/colors'
import baseStyles from '../utils/baseStyles'
import TextButton from './TextButton'
import ActionButton from './ActionButton'

export default class QuizView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Quiz: ${navigation.getParam('deck').name}`
    }
  }

  state = {
    completed: [],
    correct: [],
    cardSide: 'question'
  }

  toggleCard = () => {
    this.setState((state) => ({
      cardSide: state.cardSide === 'question' ? 'answer' : 'question'
    }))
  }

  render() {
    const { completed, correct, cardSide } = this.state
    const { deck } = this.props.navigation.state.params

    let cardNum = completed.length + 1
    const cardIds = Object.keys(deck.cards)
    const cardTotal = cardIds.length
    const currentCard = cardIds.find((cid) => !completed.includes(cid))

    if (completed.length == cardIds.length) {
      return (
        <View style={baseStyles.container}>
          <View style={styles.quizResults}>
            <Text style={styles.quizResultsLabel}>Quiz Results</Text>
            <Text style={styles.quizResultsDetails}>You've answered</Text>
            <Text style={styles.quizResultsDetails}>{correct.length}/{cardTotal} correctly</Text>
          </View>
          <TextButton style={{marginTop: 12}}>Back to deck</TextButton>
        </View>
      )
    }

    return (
      <View style={baseStyles.container}>
        <Text style={styles.quizProgress}>Card {cardNum}/{cardTotal}</Text>

        {cardSide === 'answer'
        ? <View>
            <Text style={styles.cardLabel}>Answer:</Text>
            <Text style={styles.cardText}>{deck.cards[currentCard].answer}</Text>
            <TextButton
              style={{margin: 12}}
              onPress={this.toggleCard}
            >
              Show the question
            </TextButton>
            <ActionButton label='Correct' />
            <ActionButton label='Incorrect' />
          </View>
        : <View>
            <Text style={styles.cardLabel}>Question:</Text>
            <Text style={styles.cardText}>{deck.cards[currentCard].question}</Text>
            <TextButton
              style={{margin: 12}}
              onPress={this.toggleCard}
            >
              Show the answer
            </TextButton>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  quizProgress: {
    textAlign: 'right',
    fontSize: 14
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: '700'
  },
  cardText: {
    borderWidth: 1,
    borderColor: gray,
    backgroundColor: white,
    fontSize: 32,
    fontWeight: '400',
    color: green,
    padding: 20,
    marginTop: 12
  },
  quizResults: {
    borderColor: gray,
    borderWidth: 1,
    backgroundColor: white,
    fontSize: 22,
    padding: 20
  },
  quizResultsLabel: {
    fontSize: 22,
    fontWeight: '700',
    color: green,
    marginBottom: 12,
    textAlign: 'center'
  },
  quizResultsDetails: {
    fontSize: 22,
    textAlign: 'center'
  }
})
