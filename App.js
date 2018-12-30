import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppNavigator from './components/AppNavigator'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <AppNavigator />
      </Provider>
    );
  }
}
