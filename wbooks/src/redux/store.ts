import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { fetchMiddleware } from 'redux-recompose';
import thunk from 'redux-thunk';
import Reactotron from '@config/reactotronConfig';

import bookReducer from './book/reducer';

const middlewares = [applyMiddleware(thunk, fetchMiddleware)];
const reducers = combineReducers({ bookReducer });

if (__DEV__) {
  middlewares.push(Reactotron.createEnhancer());
}

const store = createStore(reducers, compose(...middlewares));

export default store;
