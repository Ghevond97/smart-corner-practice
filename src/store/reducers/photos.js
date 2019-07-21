import { handleActions } from 'redux-actions';

const initialState = {
  photos: [],
  errors: {
    getPhotos: null,
  },
  isLoading: {
    isPhotosLoading: false,
  }
}

const photosReducer = handleActions(
  {
    GET_PHOTOS(state, {isLoading, payload, error}) {
      if(isLoading || error) {
        return {
          ...state,
          errors: {
            ...state.errors,
            getPhotos: error,
          },
          isLoading: {
            ...state.isLoading,
            isPhotosLoading: isLoading,
          },
        };
      }
      return {
        ...state,
        photos: payload,
      }
    }
  },
  initialState
);

export default photosReducer;