import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
<<<<<<< HEAD
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginStack } from './LoginStack'
import { FormStack } from './FormStack'
import { DetailsStack } from './DetailsStack'

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="FormS" component={FormStack} />
        <Stack.Screen name="LoginS" component={LoginStack} />
        <Stack.Screen name="DetailsS" component={DetailsStack} />
      </Stack.Navigator>
=======
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
>>>>>>> aaf1ee85ce4d981ed3e8aa8a2d6cfaa5761d7597
  )
}

const styles = StyleSheet.create({})