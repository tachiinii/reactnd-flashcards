import React, { Component } from 'react'
import { View, Form, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import baseStyles from '../utils/baseStyles'
import formStyles from '../utils/formStyles'
import { formatCard } from '../utils/helpers'
import { addCard } from '../actions'
import { saveDeck } from '../utils/api'
import ActionButton from './ActionButton'

class AddCardView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Add Card: ${navigation.getParam('deck').name}`
    }
  }

  state = {
    inputQuestion: '',
    inputAnswer: ''
  }

  handleTextChange = (text, inputName) => {
    this.setState({
      [inputName]: text
    })
  }

  handleSubmit = () => {
    const { dispatch, navigation } = this.props
    const { inputQuestion, inputAnswer } = this.state

    deckId = navigation.getParam('deck').id

    newCard = formatCard(inputQuestion, inputAnswer)

    dispatch(
      addCard(newCard, deckId)
    )

    saveDeck({
      [deckId]: {
        cards: { ...newCard }
      }
    })

    this.setState({
      inputQuestion: '',
      inputAnswer: ''
    })

    navigation.navigate('DeckView', {deckId})

  }

  render() {
    const { inputQuestion, inputAnswer } = this.state
    return (
      <View style={baseStyles.container}>
          <TextInput
            name='inputQuestion'
            style={formStyles.textField}
            placeholder='Enter a question'
            value={inputQuestion}
            onChangeText={(t) => this.handleTextChange(t, 'inputQuestion')}
            multiline={true}
            numberOfLines={2}
          />
          <TextInput
            name='inputAnswer'
            style={formStyles.textField}
            placeholder='Enter the answer'
            value={inputAnswer}
            onChangeText={(t) => this.handleTextChange(t, 'inputAnswer')}
            multiline={true}
            numberOfLines={2}
          />
          <ActionButton
            label='Create Card'
            onPress={this.handleSubmit}
            disabled={inputQuestion === '' || inputAnswer === ''}
          />
      </View>
    )
  }
}

export default connect()(AddCardView)
