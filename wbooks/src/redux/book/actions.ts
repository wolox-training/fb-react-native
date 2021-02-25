import { Dispatch } from 'redux';
import { BOOKS_MOCK } from '@constants/mockBooks';

export const actions = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE'
} as const;

export const BookActions = {
  getBooks: () => (dispatch: Dispatch) => {
    dispatch({ type: actions.GET_BOOKS });
    const response = { ok: true, data: BOOKS_MOCK, problem: null };
    if (response.ok) {
      dispatch({ type: actions.GET_BOOKS_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: actions.GET_BOOKS_FAILURE, payload: response.problem });
    }
  }
};

export default BookActions;
