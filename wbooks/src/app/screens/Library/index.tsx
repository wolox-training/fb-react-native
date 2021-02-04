import React from 'react';
import { View } from 'react-native';
import BookList from '@app/components/BookList';

import styles from './styles';

function Library() {
  return (
    <View style={styles.container}>
      <BookList />
    </View>
  );
}

export default Library;
