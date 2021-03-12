import bookReducer from './reducer';
import { actions } from './actions';

const initialAction = {
  type: actions.GET_BOOKS,
  target: 'books'
};
const successAction = {
  type: actions.GET_BOOKS_SUCCESS,
  target: 'books'
};
const failureAction = {
  type: actions.GET_BOOKS_FAILURE,
  target: 'books'
};

describe('getBooks', () => {
  it('initial action', () => {
    const expected = {
      books: [],
      booksError: null,
      booksLoading: true
    };
    return expect(bookReducer(undefined, initialAction)).toMatchObject(expected);
  });
  it('successAction', () => {
    const expected = {
      books: undefined,
      booksError: null,
      booksLoading: false
    };
    return expect(bookReducer(undefined, successAction)).toMatchObject(expected);
  });
  it('failureAction', () => {
    const expected = {
      books: [],
      booksError: undefined,
      booksLoading: false
    };
    return expect(bookReducer(undefined, failureAction)).toMatchObject(expected);
  });
});
