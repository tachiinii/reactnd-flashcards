import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppNavigator from './components/AppNavigator'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { setLocalNotification } from './utils/helpers'

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <AppNavigator />
      </Provider>
    );
  }
}
