import React from 'react'
import { Text, Platform, TouchableOpacity, StyleSheet } from 'react-native'

export default function ActionButton({ label, onPress, disabled = false }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosButton : styles.androidButton}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonText}>{ label }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iosButton: {
    backgroundColor: '#757575',
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  androidButton: {
    backgroundColor: '#757575',
    padding: 10,
    borderRadius: 2,
    height: 45,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 22,
    textAlign: 'center',
  }
})
