import { StackScreenProps } from '@react-navigation/stack';
import { Book } from '@interfaces/books';

export type RootStackParamList = {
  Library: undefined;
  BookSearch: undefined;
  BookDetail: { book: Book };
};

export type HomeProps = StackScreenProps<RootStackParamList, 'Library'>;
export type BookDetailProps = StackScreenProps<RootStackParamList, 'BookDetail'>;
export type BookSearchProps = StackScreenProps<RootStackParamList, 'BookSearch'>;
