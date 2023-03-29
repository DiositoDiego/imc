import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function LoginStack({ navigation }) {
	const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
			<Stack.Screen
				name='LoginS'
				component={LoginScreen}
				options={{ title: 'Login' }}
			/>
    </Stack.Navigator>
  )
}