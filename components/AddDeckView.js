import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { formatDeck } from '../utils/helpers'
import baseStyles from '../utils/baseStyles'
import formStyles from '../utils/formStyles'
import ActionButton from './ActionButton'

class AddDeckView extends Component {
  state = {
    input: '',
    submitDisabled: true
  }

  handleTextChange = (input) => {
    this.setState({
      input,
      submitDisabled: input === '' ? true : false
    })
  }

  handleSubmit = () => {
    const { dispatch, navigation } = this.props

    dispatch(
      addDeck(formatDeck(this.state.input))
    )

    this.setState({
      input: '',
      submitDisabled: true
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
          disabled={this.state.submitDisabled}
        />
      </View>
    )
  }
}

export default connect()(AddDeckView)
