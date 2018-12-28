import { StyleSheet } from 'react-native'
import { green, gray, white } from './colors'

export default StyleSheet.create({
  textField: {
    padding: 8,
    borderWidth: 1,
    borderColor: gray,
    marginTop: 12,
    marginBottom: 12,
    backgroundColor: white
  },
  iosButton: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 12,
    marginBottom: 12
  },
  androidButton: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 2,
    height: 45,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 12
  },
  disabledButton: {
    backgroundColor: gray
  },
  buttonText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }
})
