import React from 'react';
import { View } from 'react-native';
import { Props } from '@constants/types';

import BookDetailItem from './components/BookDetailItem';
import styles from './styles';

function BookDetail({ route }: Props) {
  return (
    <View style={styles.container}>
      <BookDetailItem book={route.params.book} />
    </View>
  );
}

export default BookDetail;
