import React from 'react';
import { View } from 'react-native';
import { BookDetailProps } from '@constants/types';

import BookDetailItem from './components/BookDetailItem';
import styles from './styles';

function BookDetail({ route }: BookDetailProps) {
  return (
    <View style={styles.container}>
      <BookDetailItem book={route.params.book} />
    </View>
  );
}

export default BookDetail;
