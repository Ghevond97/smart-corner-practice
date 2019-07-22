import { createAction } from 'redux-actions';
import * as api from '../../api/api';

export const getPosts = createAction('GET_POSTS', api.posts.getPosts);
export const deletePost = createAction('DELETE_POST');
export const editPost = createAction('EDIT_POST');
