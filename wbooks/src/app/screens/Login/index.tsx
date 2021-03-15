import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import wBookLogo from '@assets/General/wbooks_logo.png';
import loginBg from '@assets/General/bc_inicio.png';
import CustomButton from '@components/CustomButton';
import FormInput from '@components/CustomInput';

import styles from './styles';

function Login() {
  return (
    <ImageBackground source={loginBg} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={wBookLogo} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <FormInput placeholder="User" />
        <FormInput placeholder="Password" />
        <CustomButton label="LOGIN" secondary />
      </View>
    </ImageBackground>
  );
}

export default Login;
