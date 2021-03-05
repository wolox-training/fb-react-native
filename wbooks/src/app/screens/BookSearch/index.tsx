import React, { useState, useLayoutEffect } from 'react';
import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import BookList from '@components/BookList';
import { BookState } from '@interfaces/redux';
import { Book } from '@interfaces/books';
import { BookSearchProps } from '@constants/types';
import searchIcon from '@assets/General/ic_search_placeholder.png';
import removeIcon from '@assets/General/ic_remove_black.png';

import styles from './styles';

function BookSearch({ navigation }: BookSearchProps) {
  const books = useSelector<BookState, Book[]>(state => state.bookReducer.books);
  const [textSearch, setTextSearch] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.inputContainer}>
          <Image style={styles.searchIcon} source={searchIcon} />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={textSearch}
            onChangeText={value => setTextSearch(value.toLowerCase())}
          />
          {textSearch === '' ? (
            <Image style={styles.removeIcon} source={removeIcon} />
          ) : (
            <TouchableOpacity onPress={() => setTextSearch('')}>
              <Image style={styles.removeIconActive} source={removeIcon} />
            </TouchableOpacity>
          )}
        </View>
      )
    });
  }, [navigation, textSearch]);

  const filteredBooks = books.filter(e => e.title.toLowerCase().indexOf(textSearch) > -1);

  if (textSearch === '') {
    return (
      <View style={styles.find}>
        <Text style={styles.textFind}>Search in Wbooks</Text>
        <Text style={styles.textFind}>Find your favorite writers and books!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BookList books={filteredBooks} />
    </View>
  );
}

export default BookSearch;
