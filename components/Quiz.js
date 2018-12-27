import React, { Component } from 'react'
import { View, Text } from 'react-native'
import TextButton from './TextButton'
import ActionButton from './ActionButton'

export default class Quiz extends Component {
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

  render() {
    const { completed, correct, cardSide } = this.state
    const { deck } = this.props.navigation.state.params

    let cardNum = completed.length + 1
    const cardIds = Object.keys(deck.cards)
    const cardTotal = cardIds.length
    const currentCard = cardIds.find((cid) => !completed.includes(cid))

    if (completed.length == cardIds.length) {
      return (
        <View>
          <Text>Quiz Results</Text>
          <Text>You've answered</Text>
          <Text>{correct.length}/{cardTotal} correctly</Text>
          <TextButton>Back to deck</TextButton>
        </View>
      )
    }

    return (
      <View>
        <Text>Card {cardNum}/{cardTotal}</Text>

        {cardSide === 'question' &&
          <View>
            <Text>{deck.cards[currentCard].question}</Text>
            <TextButton>Show the answer</TextButton>
          </View>
        }
        {cardSide === 'answer' &&
          <View>
            <Text>{deck.cards[currentCard].answer}</Text>
            <TextButton>Show the question</TextButton>
            <ActionButton label='Correct' />
            <ActionButton label='Incorrect' />
          </View>
        }
      </View>
    )
  }
}
