import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from '../screens/LoginScreen'
import { FormScreen } from '../screens/FormScreen'
import { DetailsScreen } from '../screens/DetailsScreen'

const Stack = createNativeStackNavigator()

export default function AppNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Login' }}
        />
        <Stack.Screen
            name="Form"
            component={FormScreen}
            options={{ title: 'Form' }}
        />
        <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ title: 'Details' }}
        />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})