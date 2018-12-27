import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import ActionButton from './ActionButton'

export default class AddCard extends Component {
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
      <View>
        <TextInput
          style={styles.textField}
          value={this.state.inputQ}
          onChangeText={this.handleTextChange}
        />
        <TextInput
          style={styles.textField}
          value={this.state.inputA}
          onChangeText={this.handleTextChange}
        />
        <ActionButton
          label='Create Card'
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textField: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50
  }
})
