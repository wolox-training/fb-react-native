import { StackScreenProps } from '@react-navigation/stack';
import { Book } from '@interfaces/books';
import { actions } from '@redux/book/actions';

export type RootStackParamList = {
  Library: undefined;
  BookDetail: { book: Book };
};

export type Props = StackScreenProps<RootStackParamList, 'BookDetail'>;
interface GetBooksAction {
  type: typeof actions.GET_BOOKS;
  isLoading: boolean;
}
interface GetBooksSuccessAction {
  type: typeof actions.GET_BOOKS_SUCCESS;
  isLoading: boolean;
  payload: [];
}
interface GetBooksFailureAction {
  type: typeof actions.GET_BOOKS_FAILURE;
  hasError: boolean;
  payload: boolean;
}

export type GetBooksActionTypes = GetBooksAction | GetBooksSuccessAction | GetBooksFailureAction;
