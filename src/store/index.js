import {createStore} from 'redux';
import reducers from './reducers';

export default function initializeStore(initData) {
  return createStore(reducers, initData);
}