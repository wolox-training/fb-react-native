import React, { useEffect } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Book } from '@interfaces/books';
import { BookState } from '@interfaces/redux';
import BookActions from '@redux/book/actions';
import BookItem from '@components/BookItem';

import styles from './styles';

const renderItem: ListRenderItem<Book> = ({ item }) => <BookItem book={item} />;

const keyExtractor = ({ id }: Book) => String(id);

const flatListItemSeparator = () => <View style={styles.separator} />;

function BookList() {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const books = useSelector<BookState, Book[]>(state => state.bookReducer.books);

  useEffect(() => {
    dispatch(BookActions.getBooks());
  }, [dispatch]);

  return (
    <FlatList
      data={books}
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
