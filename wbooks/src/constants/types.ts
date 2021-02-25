import { StackScreenProps } from '@react-navigation/stack';
import { Book } from '@interfaces/books';

export type RootStackParamList = {
  Library: undefined;
  BookDetail: { book: Book };
};

export type Props = StackScreenProps<RootStackParamList, 'BookDetail'>;
