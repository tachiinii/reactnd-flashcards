import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { greyLight } from '../utils/colors'
import baseStyles from '../utils/baseStyles'
import TextButton from './TextButton'
import DeckList from './DeckList'
import { AppLoading } from 'expo'

class DeckListView extends Component {

  state = {
    ready: false
  }

  componentDidMount() {
    const { dispatch } = this.props

    fetchDecks()
      .then((decks) => {
        dispatch(receiveDecks(decks))
      })
      .then(() => this.setState({ ready: true }))
  }

  render() {
    const { decks, navigation } = this.props

    if (this.state.ready === false) {
      return <AppLoading />
    }

    if (Object.keys(decks).length === 0) {
      return <View style={baseStyles.container}>
        <Text>No decks found. Use the tab link to create your first deck.</Text>
      </View>
    }
    else {
      return <ScrollView style={baseStyles.container}>
        <DeckList navigation={navigation} decks={decks} />
      </ScrollView>
    }
  }
}

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckListView)
