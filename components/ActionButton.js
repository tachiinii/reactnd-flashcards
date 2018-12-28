import React from 'react'
import { Text, Platform, TouchableOpacity, StyleSheet } from 'react-native'
import formStyles from '../utils/formStyles'

export default function ActionButton({ label, onPress, disabled = false }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? formStyles.iosButton : formStyles.androidButton}
      onPress={onPress}
      disabled={disabled}>
      <Text style={formStyles.buttonText}>{ label }</Text>
    </TouchableOpacity>
  )
}
