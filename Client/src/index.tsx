import { View, Text } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SingleTransaction from './screens/SingleTransaction';
import NewTransaction from './screens/NewTransaction';

const Stack = createNativeStackNavigator();

export default function Index() : JSX.Element {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
        // options={{title: 'Welcome'}}
      />
      <Stack.Screen
        name='SingleTransac'
        component={SingleTransaction}
      />
      <Stack.Screen
        name='NewTransac'
        component={NewTransaction}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}