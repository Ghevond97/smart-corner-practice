import { createAction } from 'redux-actions';
import * as api from '../../api/api';

export const getPosts = createAction('GET_POSTS', api.posts.getPosts);