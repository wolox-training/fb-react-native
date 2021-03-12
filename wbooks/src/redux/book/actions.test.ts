import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import api from '@config/api';
import BookService from '@services/BookService';

import actionCreators, { actions } from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// const problem = { message: 'Bad request', status: 500 };

describe('get books', () => {
  const mockedStore = mockStore({ bookReducer: {} });
  beforeEach(() => mockedStore.clearActions());
  it('failure', async () => {
    // api.get = jest.fn().mockImplementation(() => ({ ok: false, problem }));
    await mockedStore.dispatch(actionCreators.getBooks());
    expect(mockedStore.getActions()).toEqual([
      { target: 'books', type: actions.GET_BOOKS, service: BookService.getBooks }
      //   { target: 'books', type: actions.GET_BOOKS_FAILURE }
    ]);
  });
});
