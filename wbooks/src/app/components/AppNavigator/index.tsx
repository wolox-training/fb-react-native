import React, { useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '@constants/types';
import Colors from '@constants/colors';
import Library from '@screens/Library';
import Settings from '@screens/Settings';
import BookDetail from '@screens/BookDetail';
import BookSearch from '@screens/BookSearch';
import { BOOK_DETAIL, LIBRARY, SETTINGS, BOOK_SEARCH } from '@constants/routes';
import { SCREEN_OPTS } from '@constants/header';

import TabIcon from './components/TabIcon';
import SearchButton from './components/SearchButton';

const LibraryStack = createStackNavigator<RootStackParamList>();

function getHeaderTitle(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route);
  switch (routeName) {
    case undefined:
      return 'LIBRARY';
    case LIBRARY:
      return 'LIBRARY';
    case SETTINGS:
      return 'SETTINGS';
    default:
      return null;
  }
}

function HomeStack({ navigation, route }: any) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} route={route} />
      })}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.grey
      }}>
      <Tab.Screen name={LIBRARY} component={Library} />
      <Tab.Screen name={SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <LibraryStack.Navigator screenOptions={SCREEN_OPTS}>
      <LibraryStack.Screen
        name={LIBRARY}
        component={HomeStack}
        options={{
          title: 'LIBRARY',
          headerRight: () => <SearchButton />
        }}
      />
      <LibraryStack.Screen
        name={BOOK_DETAIL}
        component={BookDetail}
        options={{
          title: 'BOOK DETAIL'
        }}
      />
      <LibraryStack.Screen
        name={BOOK_SEARCH}
        component={BookSearch}
        options={{
          headerTitleContainerStyle: { flexGrow: 1 }
        }}
      />
    </LibraryStack.Navigator>
  );
}

export default AppNavigator;
