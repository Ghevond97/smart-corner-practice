import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-loading-promise-middleware';

const middlewares = applyMiddleware(thunk, promise);

export default function initializeStore(initData) {
  return createStore(reducers, initData, middlewares);
}