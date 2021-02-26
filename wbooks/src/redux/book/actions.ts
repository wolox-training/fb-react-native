import { Dispatch } from 'redux';
import BookService from '@services/BookService';
import { Book } from '@interfaces/books';

interface responseProps {
  ok: boolean;
  data: Book;
  problem: string | null;
}

export const actions = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE'
} as const;

export const actionCreators = {
  getBooks: () => async (dispatch: Dispatch) => {
    dispatch({ type: actions.GET_BOOKS });
    const response: any = await BookService.getBooks();
    if (response.ok) {
      dispatch({ type: actions.GET_BOOKS_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: actions.GET_BOOKS_FAILURE, payload: response.problem });
    }
  }
};

export default actionCreators;
