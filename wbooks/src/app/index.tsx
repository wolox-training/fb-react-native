/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '@constants/types';

import Library from './screens/Library';
import BookDetail from './screens/BookDetail';

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="BookDetail" component={BookDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
