import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import searchIcon from '@assets/NavigationBar/ic_search.png';

import styles from './styles';

function SearchButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('BookSearch')}>
      <Image style={styles.icon} source={searchIcon} />
    </TouchableOpacity>
  );
}

export default SearchButton;
