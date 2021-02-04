import React from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import BookItem from '@app/components/BookItem';
import { Book } from '@interfaces//books';

import styles from './styles';

const BOOKS_MOCK: Array<Book> = [
  {
    id: 0,
    author: 'Emmie Thiel',
    title: 'Ring of Bright Water: The revenge of the dark fire ring',
    genre: 'Short story',
    publisher: 'Butterworth-Heinemann',
    year: '1968'
  },
  {
    id: 1,
    author: 'Christopher Pike',
    title: 'Scavenger Hunt',
    genre: 'other',
    publisher: 'Pocket Books',
    year: '1989'
  },
  {
    id: 2,
    author: 'Lois Duncan',
    title: 'Locked in time',
    genre: 'suspense',
    publisher: 'Little, Brown',
    year: '1985',
    imageUrl: 'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg'
  },
  {
    id: 3,
    author: 'Christopher Pike',
    title: 'Scavenger Hunt',
    genre: 'suspense',
    publisher: 'Pocket Books',
    year: '1989',
    imageUrl: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg'
  }
];

const renderItem: ListRenderItem<Book> = ({ item }) => <BookItem {...item} />;

const FlatListItemSeparator = () => <View style={styles.separator} />;

function BookList() {
  return (
    <View style={styles.container}>
      <FlatList<Book>
        data={BOOKS_MOCK}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={FlatListItemSeparator}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default BookList;
