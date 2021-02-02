import React from 'react';
import {
  View,
  // Image,
  Text
} from 'react-native';

import styles from './styles';

export default function BookItem() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>{/* <Image /> */}</View>
      <View style={styles.infoContainer}>
        <Text style={styles.textTitle} />
        <Text style={styles.textAuthor} />
      </View>
    </View>
  );
}
