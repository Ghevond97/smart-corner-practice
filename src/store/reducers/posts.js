import { handleActions } from 'redux-actions';

const initialState = {
  posts: [],
  errors: {
    getPosts: null,
  },
  isLoading: {
    isPostsLoading: false,
    isDeletePostLoading: false,
  },
};

const postsReducer = handleActions(
  {
    GET_POSTS(state, { isLoading, payload, error }) {
      console.log('PAYOAD', payload);
      if (isLoading || error) {
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
        isLoading: {
          ...state.isLoading,
          isPostsLoading: isLoading,
        }
      };
    },

    DELETE_POST(state, { payload, isLoading, error }) {
      if (isLoading || error) {
        return {
          ...state,
          errors: {
            ...state.errors,
            deletePost: error,
          },
          isLoading: {
            ...state.isLoading,
            isDeletePostLoading: isLoading,
          },
        };
      }

      return {
        ...state,
        posts: payload,
      };
    },
    EDIT_POST(state, { payload, isLoading, error }) {
      if (isLoading || error) {
        return {
          ...state,
          errors: {
            ...state.errors,
            editPost: error,
          },
          isLoading: {
            ...state.isLoading,
            isEditPostLoading: isLoading,
          },
        };
      }

      return {
        ...state,
        posts: payload,
      };
    },
  },

  initialState
);

export default postsReducer;
