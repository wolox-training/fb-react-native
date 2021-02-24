import React, { useEffect } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BookItem from '@components/BookItem';
import { Book } from '@interfaces/books';
import actionCreators from '@redux/book/actions';

import styles from './styles';

const renderItem: ListRenderItem<Book> = ({ item }) => <BookItem book={item} />;

const keyExtractor = ({ id }: Book) => String(id);

const flatListItemSeparator = () => <View style={styles.separator} />;
interface RootState {
  books: [];
  isLoading: boolean;
  hasError: boolean;
}

function BookList() {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const mockBooks = useSelector((state: RootState) => state.books);

  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);

  return (
    <FlatList
      data={mockBooks}
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
