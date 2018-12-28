import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import baseStyles from '../utils/baseStyles'
import formStyles from '../utils/formStyles'
import ActionButton from './ActionButton'

export default class AddCardView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Add Card: ${navigation.getParam('deck').name}`
    }
  }

  state = {
    inputQ: 'Enter question',
    inputA: 'Enter answer'
  }

  handleTextChange = (input) => {
    this.setState({
      inputQ,
      inputA
    })
  }

  handleSubmit = () => {
  }

  render() {
    return (
      <View style={baseStyles.container}>
        <TextInput
          style={formStyles.textField}
          value={this.state.inputQ}
          onChangeText={this.handleTextChange}
          multiline={true}
          numberOfLines={2}
        />
        <TextInput
          style={formStyles.textField}
          value={this.state.inputA}
          onChangeText={this.handleTextChange}
          multiline={true}
          numberOfLines={2}
        />
        <ActionButton
          label='Create Card'
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}
