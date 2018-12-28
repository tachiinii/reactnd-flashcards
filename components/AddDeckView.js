import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import baseStyles from '../utils/baseStyles'
import formStyles from '../utils/formStyles'
import ActionButton from './ActionButton'

export default class AddDeckView extends Component {
  state = {
    input: 'New deck name'
  }

  handleTextChange = (input) => {
    this.setState({
      input
    })
  }

  handleSubmit = () => {
  }

  render() {
    return (
      <View style={baseStyles.container}>
        <TextInput
          style={formStyles.textField}
          value={this.state.input}
          onChangeText={this.handleTextChange}
        />
        <ActionButton label='Create Deck' onPress={this.handleSubmit} />
      </View>
    )
  }
}
