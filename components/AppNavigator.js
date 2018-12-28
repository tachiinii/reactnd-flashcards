import React, { Component } from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'
import AddDeckView from './AddDeckView'
import DeckListView from './DeckListView'
import DeckView from './DeckView'
import QuizView from './QuizView'
import AddCardView from './AddCardView'
import { black, green, gray, white } from '../utils/colors'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

const DecksStack = createStackNavigator({
  DeckListView: {
    screen: DeckListView,
    navigationOptions: {
      title: 'Flashcard Decks'
    }
  },
  DeckView: {
    screen: DeckView
  },
  QuizView: {
    screen: QuizView
  },
  AddCardView: {
    screen: AddCardView
  }
},
{
  defaultNavigationOptions: {
    headerTintColor: white,
    headerStyle: {
      backgroundColor: black,
    }
  }
})

const AddDeckStack = createStackNavigator({
  AddDeckView: {
    screen: AddDeckView,
    navigationOptions: {
      title: 'Add Deck'
    }
  }
},
{
  defaultNavigationOptions: {
    headerTintColor: white,
    headerStyle: {
      backgroundColor: black,
    }
  }
})

const TabNavigator = createBottomTabNavigator({
  DecksStack: {
    screen: DecksStack,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name='cards-outline' color={tintColor} size={30} />
      )
    }
  },
  AddDeckStack: {
    screen: AddDeckStack,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name='md-add-circle-outline' color={tintColor} size={30} />
      )
    }
  }
},
{
  tabBarOptions: {
    activeTintColor: white,
    inactiveTintColor: gray,
    style: {
      height: 56,
      backgroundColor: green,
      shadowColor: `rgba(0, 0, 0, 0.24)`,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    }
  }
})

export default createAppContainer(TabNavigator)
