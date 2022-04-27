import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainApp} from './Screens';
import {MovieDetailPage} from './Screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={MainApp} />
        <Stack.Screen name="MovieDetailPage" component={MovieDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
