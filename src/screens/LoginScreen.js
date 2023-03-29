import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LoginForm from './LoginForm'
export default function LoginScreen() {
  return (
    <KeyboardAwareScrollView>
      <Text>Login Screen</Text>
      <View style={styles.box} />
      <LoginForm/>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 150,
  },
  box: {
    marginhorizontal: 30,
  }
})