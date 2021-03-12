import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

export const stateDescription = {
  books: []
};

export const initialState = completeState(stateDescription);

const bookReducer = {
  primaryActions: [actions.GET_BOOKS]
};

export default createReducer(initialState, completeReducer(bookReducer));
