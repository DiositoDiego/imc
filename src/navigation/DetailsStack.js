import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailsScreen from '../screens/DetailsScreen'

export default function DetailsStack({ navigation }) {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
			<Stack.Screen
				name='DetailsS'
				component={DetailsScreen}
				options={{ title: 'Detalles' }}
			/>
    </Stack.Navigator>
  )
}