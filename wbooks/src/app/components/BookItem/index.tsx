import React from 'react';
import { View, Image, Text } from 'react-native';
import { Book } from '@interfaces//books';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function BookItem({ author, imageUrl, title }: Book) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('BookDetail')}>
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
