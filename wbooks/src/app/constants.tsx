import React from 'react';
import { Image } from 'react-native';
import Colors from '@constants/colors';
import Fonts from '@constants/fonts';
import backButton from '@assets/NavigationBar/ic_back.png';
import headerBg from '@assets/General/bc_nav_bar.png';

import styles from './style';

// TODO: Move this constants inside AppNavigator folder in the TabBar PR

const HeaderBackground = () => <Image source={headerBg} style={styles.header} />;

const BackButton = () => <Image source={backButton} style={styles.back} />;

export const SCREEN_OPTS = {
  headerTitleStyle: Fonts.H3,
  headerStyle: { height: 100 },
  headerBackground: () => <HeaderBackground />,
  headerBackImage: () => <BackButton />,
  headerBackTitleVisible: false,
  headerTintColor: Colors.white
};
