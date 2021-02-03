import React from 'react';
import { View, Image, Text } from 'react-native';
import { Book } from '@interfaces//books';

import styles from './styles';

function BookItem({ author, imageUrl, title }: Book) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.dataBook}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textAuthor}>{author}</Text>
      </View>
    </View>
  );
}

export default BookItem;
