import React, { Component } from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'
import AddDeck from './AddDeck'
import DeckListView from './DeckListView'
import DeckView from './DeckView'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

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
      tabBarLabel: 'Decks',
      tabBarIcon: <MaterialCommunityIcons name='cards-outline' size={30} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: <Ionicons name='md-add-circle-outline' size={30} />
    }
  }
})

export default createAppContainer(TabNavigator)
