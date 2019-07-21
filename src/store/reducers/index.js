import { combineReducers } from 'redux';
import photosReducer from './photos';
import postsReducer from './posts';

const appReducer = combineReducers({
  posts: postsReducer,
  photos: photosReducer,
});

export default function(state, action) {
  return appReducer(state, action);
}