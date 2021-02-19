import React from 'react';
import { View, Image, Text } from 'react-native';
import CustomButton from '@components/CustomButton';
import { Book } from '@interfaces/books';

import styles from './styles';

interface Props {
  book: Book;
}

function BookDetailItem({ book }: Props) {
  const { author, genre, imageUrl, title, year } = book;

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Image
          source={imageUrl ? { uri: imageUrl } : require('@assets/img_book_placeholder.png')}
          style={styles.image}
        />
        <View style={styles.dataBook}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textAvailability}>Availability</Text>
          <Text style={styles.textBasic}>{author}</Text>
          <Text style={styles.textBasic}>{year}</Text>
          <Text style={styles.textBasic}>{genre}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton label="ADD TO WISHLIST" secondary />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton label="RENT" />
      </View>
    </View>
  );
}

export default BookDetailItem;
