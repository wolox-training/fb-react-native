import React from 'react';
import { View, Image, Text } from 'react-native';
import { Book } from '@interfaces//books';

import styles from './styles';

function BookItem({ author, imageUrl, title }: Book) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textAuthor}>{author}</Text>
      </View>
    </View>
  );
}

export default BookItem;
