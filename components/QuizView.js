import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { updateQuiz } from '../actions'
import { saveDeck } from '../utils/api'
import { gray, green, white } from '../utils/colors'
import { getPercent } from '../utils/helpers'
import baseStyles from '../utils/baseStyles'
import TextButton from './TextButton'
import ActionButton from './ActionButton'

class QuizView extends Component {
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

  reset = () => {
    this.setState((state) => ({
      completed: [],
      correct: [],
      cardSide: 'question'
    }))
  }

  handleResponse = (cardId, isCorrect = false) => {
    this.setState((state) => ({
      cardSide: 'question',
      completed: state.completed.concat(cardId),
      correct: isCorrect ? state.correct.concat(cardId) : state.correct
    }))
  }

  componentDidUpdate() {
    const { deck } = this.props.navigation.state.params
    const { completed, correct } = this.state
    cardCount = Object.keys(deck.cards).length

    if (completed.length === cardCount) {
      this.saveQuiz(correct.length, cardCount, deck.id)
    }
  }

  saveQuiz = (numCorrect, numTotal, deckId) => {
    quiz = {
      updated: Date.now(),
      score: getPercent(numCorrect, numTotal)
    }
    this.props.dispatch(updateQuiz(quiz, deckId))

    saveDeck({
      [deckId]: { quiz }
    })
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
            <Text style={styles.quizResultsDetails}>{correct.length}/{cardTotal} ({getPercent(correct.length, cardTotal)}%) correctly</Text>
          </View>
          <TextButton
            style={{margin: 12}}
            onPress={() => this.reset()}
          >
            Restart Quiz
          </TextButton>
          <TextButton
            style={{margin: 12}}
            onPress={() => this.props.navigation.navigate('DeckView',{deck})}
          >
            Back to deck
          </TextButton>
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
            <ActionButton label='Correct' onPress={() => this.handleResponse(deck.cards[currentCard].id, true)} />
            <ActionButton label='Incorrect' onPress={() => this.handleResponse(deck.cards[currentCard].id)} />
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

export default connect()(QuizView)
