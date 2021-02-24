import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '@redux/book/reducer';
import reactotron from '@config/reactotronConfig';

const middleware = applyMiddleware(thunk);

const store = createStore(reducer, compose(middleware, reactotron.createEnhancer()));

export default store;
