import { View, Text } from 'react-native'
import React from 'react'
import FormScreen from '../screens/FormScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function FormStack({ navigation }) {
	const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
			<Stack.Screen
				name='FormS'
				component={FormScreen}
				options={{ title: 'Form' }}
			/>
    </Stack.Navigator>
  )
}