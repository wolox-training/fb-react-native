import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Book } from '@interfaces/books';

import styles from './styles';

interface Props {
  book: Book;
}

function BookItem({ book }: Props) {
  const navigation = useNavigation();
  const { author, imageUrl, title } = book;

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('BookDetail', { book })}>
      <Image
        source={imageUrl ? { uri: imageUrl } : require('@assets/img_book_placeholder.png')}
        style={styles.image}
      />
      <View style={styles.dataBook}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textAuthor}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookItem;
