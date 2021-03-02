import { createStore, applyMiddleware, compose } from 'redux';
import { fetchMiddleware } from 'redux-recompose';
import thunk from 'redux-thunk';
import Reactotron from '@config/reactotronConfig';

import bookReducer from './book/reducer';

const middlewares = [applyMiddleware(thunk, fetchMiddleware)];

if (__DEV__) {
  middlewares.push(Reactotron.createEnhancer());
}

const store = createStore(bookReducer, compose(...middlewares));

export default store;
