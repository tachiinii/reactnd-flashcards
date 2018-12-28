import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { greyLight } from '../utils/colors'
import baseStyles from '../utils/baseStyles'
import TextButton from './TextButton'
import DeckList from './DeckList'

export default class DeckListView extends Component {
  state = {
    decks: {
      '123456': {
        id: '123456',
        created: 1545793200,
        name: 'First Deck',
        cards: {
          '123': {
            id: '123',
            created: 1545793215,
            question: 'Q1',
            answer: 'A1'
          },
          '124': {
            id: '124',
            created: 1545793230,
            question: 'Q2',
            answer: 'A2'
          }
        }
      },
      '123457': {
        id: '123457',
        name: 'Deck Numero Dos',
        cards: {}
      }
    }
  }
  // state = {
  // }
  render() {
    if (this.state.decks === undefined) {
      return <View style={baseStyles.container}>
        <Text>No decks found. Use the tab link to create your first deck.</Text>
      </View>
    }
    else {
      return <View style={baseStyles.container}>
        <DeckList navigation={this.props.navigation} decks={this.state.decks} />
      </View>
    }
  }
}

const styles = StyleSheet.create({
})
