import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
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
  )
}

const styles = StyleSheet.create({})