import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { saveDeck } from '../utils/api'
import { formatDeck } from '../utils/helpers'
import baseStyles from '../utils/baseStyles'
import formStyles from '../utils/formStyles'
import ActionButton from './ActionButton'

class AddDeckView extends Component {
  state = {
    input: ''
  }

  handleTextChange = (input) => {
    this.setState({
      input
    })
  }

  handleSubmit = () => {
    const { dispatch, navigation } = this.props

    const newDeck = formatDeck(this.state.input)

    dispatch(addDeck(newDeck))

    saveDeck(newDeck, newDeck.id)

    this.setState({
      input: ''
    })

    navigation.navigate('DeckListView')
  }

  render() {
    return (
      <View style={baseStyles.container}>
        <TextInput
          style={formStyles.textField}
          value={this.state.input}
          onChangeText={this.handleTextChange}
          placeholder='New deck name'
        />
        <ActionButton
          label='Create Deck'
          onPress={this.handleSubmit}
          disabled={this.state.input === ''}
        />
      </View>
    )
  }
}

export default connect()(AddDeckView)
