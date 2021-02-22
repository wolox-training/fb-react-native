import React from 'react';
import { Image } from 'react-native';
import Colors from '@constants/colors';
import backButton from '@assets/NavigationBar/ic_back.png';
import headerBg from '@assets/General/bc_nav_bar.png';

import styles from './style';

const HeaderBackground = () => <Image source={headerBg} style={styles.header} />;

const BackButton = () => <Image source={backButton} />;

export const SCREEN_OPTS = {
  headerBackImage: () => <BackButton />,
  headerTintColor: Colors.white,
  headerBackground: () => <HeaderBackground />
};

export default SCREEN_OPTS;
