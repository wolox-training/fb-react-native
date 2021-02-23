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
import { LIBRARY, BOOK_DETAIL } from '@constants/routes';

import Library from './screens/Library';
import BookDetail from './screens/BookDetail';
import { SCREEN_OPTS } from './constants';

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator screenOptions={SCREEN_OPTS}>
        <Stack.Screen
          name={LIBRARY}
          component={Library}
          options={{
            title: 'LIBRARY'
          }}
        />
        <Stack.Screen
          name={BOOK_DETAIL}
          component={BookDetail}
          options={{
            title: 'BOOK DETAIL'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
