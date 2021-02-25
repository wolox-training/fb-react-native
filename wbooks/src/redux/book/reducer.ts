import { BookState, GetBooksActionTypes } from '@interfaces/redux';

import { actions } from './actions';

export const initialState: BookState = {
  books: [],
  isLoading: false,
  hasError: false
};

const bookReducer = (state = initialState, action: GetBooksActionTypes) => {
  switch (action.type) {
    case actions.GET_BOOKS:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        isLoading: false
      };
    case actions.GET_BOOKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: action.payload
      };
    default:
      return state;
  }
};

export default bookReducer;
