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
import { Image, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '@constants/types';
import Colors from '@constants/colors';
import Library from '@screens/Library';
import Settings from '@screens/Settings';
import BookDetail from '@screens/BookDetail';
import { LIBRARY, SETTINGS } from '@constants/routes';

import SCREEN_OPTS from './constants';

const LibraryStack = createStackNavigator<RootStackParamList>();

function LibraryStackScreen() {
  return (
    <LibraryStack.Navigator screenOptions={SCREEN_OPTS}>
      <LibraryStack.Screen name={LIBRARY} component={Library} />
      <LibraryStack.Screen
        name="BookDetail"
        component={BookDetail}
        options={{
          title: 'BOOK DETAIL'
        }}
      />
    </LibraryStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={SCREEN_OPTS}>
      <SettingsStack.Screen name={SETTINGS} component={Settings} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.primary,
          inactiveTintColor: Colors.grey
        }}>
        <Tab.Screen
          name="Library"
          component={LibraryStackScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <Image source={require('@assets/ToolBar/ic_library_active.png')} resizeMode="contain" />
              ) : (
                <Image source={require('@assets/ToolBar/ic_library.png')} resizeMode="contain" />
              );
            }
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <Image source={require('@assets/ToolBar/ic_settings_active.png')} resizeMode="contain" />
              ) : (
                <Image source={require('@assets/ToolBar/ic_settings.png')} resizeMode="contain" />
              );
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
