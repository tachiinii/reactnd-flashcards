import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import ActionButton from './ActionButton'

export default class AddDeck extends Component {
  state = {
    input: 'Placeholder'
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
      <View>
        <TextInput
          style={styles.textField}
          value={this.state.input}
          onChangeText={this.handleTextChange}
        />
        <ActionButton label='Create Deck' onPress={this.handleSubmit} />
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
