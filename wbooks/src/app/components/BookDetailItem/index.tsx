import React from 'react';
import { View, Image, Text } from 'react-native';
import CustomButton from '@app/components/CustomButton';
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
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.dataBook}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textAvailability}>Availability</Text>
          <Text style={styles.textAuthor}>{author}</Text>
          <Text style={styles.textYear}>{year}</Text>
          <Text style={styles.textGenre}>{genre}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton label={'ADD TO WISHLIST'} type={'secondary'} />
        <CustomButton label={'RENT'} type={'primary'} />
      </View>
    </View>
  );
}

export default BookDetailItem;
