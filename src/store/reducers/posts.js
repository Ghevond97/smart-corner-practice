import { handleActions } from 'redux-actions';

const initialState = {
  posts: [],
  errors: {
    getPosts: null,
  },
  isLoading: {
    isPostsLoading: false,
  }
}

const postsReducer = handleActions(
  {
    GET_POSTS(state, {isLoading, payload, error}) {
      console.log('PAYOAD', payload)
      if(isLoading || error) {
        return {
          ...state,
          errors: {
            ...state.errors,
            getPosts: error,
          },
          isLoading: {
            ...state.isLoading,
            isPostsLoading: isLoading,
          },
        };
      }
      return {
        ...state,
        posts: payload,
      }
    }
  },
  initialState
);

export default postsReducer;