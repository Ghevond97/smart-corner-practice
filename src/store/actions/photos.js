import { createAction } from 'redux-actions';
import * as api from '../../api/api';

export const getPhotos = createAction('GET_PHOTOS', api.photos.getPhotos);