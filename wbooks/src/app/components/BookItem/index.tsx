import React from 'react';
import { View, Image, Text } from 'react-native';
import { Book } from '@interfaces//books';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

interface Props {
  book: Book;
}

function BookItem({ book }: Props) {
  const navigation = useNavigation();
  const { author, imageUrl, title } = book;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('BookDetail', { book })}>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.dataBook}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textAuthor}>{author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default BookItem;
