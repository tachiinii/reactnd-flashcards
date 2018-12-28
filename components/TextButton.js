import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { green } from '../utils/colors'

export default function TextButton({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, style]}>{ children }</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    fontSize: 14,
    color: green
  }
})
