import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import BookList from '@components/BookList';
import { BookState } from '@interfaces/redux';
import BookActions from '@redux/book/actions';
import { Book } from '@interfaces/books';

import styles from './styles';

function Library() {
  const dispatch = useDispatch();
  const books = useSelector<BookState, Book[]>(state => state.bookReducer.books);

  useEffect(() => {
    dispatch(BookActions.getBooks());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <BookList books={books} />
    </View>
  );
}

export default Library;
