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
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '@constants/types';
import { Image } from 'react-native';
import Colors from '@constants/colors';
import Library from '@screens/Library';
import Settings from '@screens/Settings';
import BookDetail from '@screens/BookDetail';

import styles from './style';

const HeaderBackground = () => (
  <Image source={require('@assets/General/bc_nav_bar.png')} resizeMode="contain" style={styles.header} />
);

const BackButton = () => <Image source={require('@assets/NavigationBar/ic_back.png')} />;

const LibraryStack = createStackNavigator<RootStackParamList>();

function LibraryStackScreen() {
  return (
    <LibraryStack.Navigator screenOptions={{ headerBackImage: () => <BackButton /> }}>
      <LibraryStack.Screen name="Library" component={Library} />
      <LibraryStack.Screen
        name="BookDetail"
        component={BookDetail}
        options={{
          title: 'BOOK DETAIL',
          headerTintColor: Colors.white,
          headerBackground: () => <HeaderBackground />
        }}
      />
    </LibraryStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
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
