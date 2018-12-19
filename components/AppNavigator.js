import React, { Component } from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'
import AddDeck from './AddDeck'
import DeckListView from './DeckListView'
import DeckView from './DeckView'


const DecksStack = createStackNavigator({
  DeckListView: {
    screen: DeckListView
  },
  DeckView: {
    screen: DeckView
  }
})

const TabNavigator = createBottomTabNavigator({
  DecksStack: {
    screen: DecksStack,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }
})

export default createAppContainer(TabNavigator)
