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
import { StatusBar, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '@constants/types';
import Colors from '@constants/colors';
import backButton from '@assets/NavigationBar/ic_back.png';
import headerBg from '@assets/General/bc_nav_bar.png';

import Library from './screens/Library';
import BookDetail from './screens/BookDetail';
import styles from './style';

const Stack = createStackNavigator<RootStackParamList>();

const HeaderBackground = () => <Image source={headerBg} resizeMode="contain" style={styles.header} />;

const BackButton = () => <Image source={backButton} />;

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerBackImage: () => <BackButton />
        }}>
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen
          name="BookDetail"
          component={BookDetail}
          options={{
            title: 'BOOK DETAIL',
            headerTintColor: Colors.white,
            headerBackground: () => <HeaderBackground />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
