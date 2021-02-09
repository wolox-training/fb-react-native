import { Book } from '@interfaces/books';
import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Library: undefined;
  BookDetail: { book: Book };
};

export type Props = StackScreenProps<RootStackParamList, 'BookDetail'>;
