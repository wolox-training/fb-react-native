import React from 'react';
import { View, FlatList, ListRenderItem, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Book } from '@interfaces/books';
import BookItem from '@components/BookItem';

import styles from './styles';

const renderItem: ListRenderItem<Book> = ({ item }) => <BookItem book={item} />;

const keyExtractor = ({ id }: Book) => String(id);

const flatListItemSeparator = () => <View style={styles.separator} />;

const EmptyListMessage = () => (
  <View style={styles.emptyListContainer}>
    <Text style={styles.emptyListText}>No data found</Text>
  </View>
);

function BookList(customlist: { books: Book[] | null }) {
  const insets = useSafeAreaInsets();

  return (
    <FlatList
      data={customlist.books}
      ListEmptyComponent={EmptyListMessage}
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
