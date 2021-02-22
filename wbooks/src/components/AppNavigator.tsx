import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '@constants/types';
import Colors from '@constants/colors';
import Library from '@screens/Library';
import Settings from '@screens/Settings';
import BookDetail from '@screens/BookDetail';
import { LIBRARY, SETTINGS } from '@constants/routes';
import SCREEN_OPTS from '@app/constants';

import TabIcon from './TabIcon';

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

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} route={route} />
      })}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.grey
      }}>
      <Tab.Screen name={LIBRARY} component={LibraryStackScreen} />
      <Tab.Screen name={SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
