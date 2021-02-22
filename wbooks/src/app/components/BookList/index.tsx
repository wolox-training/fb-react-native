import React from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BookItem from '@components/BookItem';
import { Book } from '@interfaces/books';
import { BOOKS_MOCK } from '@constants/mockBooks';

import styles from './styles';

const renderItem: ListRenderItem<Book> = ({ item }) => <BookItem book={item} />;

const keyExtractor = ({ id }: Book) => String(id);

const flatListItemSeparator = () => <View style={styles.separator} />;

function BookList() {
  const insets = useSafeAreaInsets();

  return (
    <FlatList
      data={BOOKS_MOCK}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={flatListItemSeparator}
      keyExtractor={keyExtractor}
      style={styles.container}
      contentContainerStyle={{ paddingBottom: Math.max(insets.bottom, 20) }}
    />
  );
}

export default BookList;
