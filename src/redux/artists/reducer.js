import {
    ARTISTS_SEARCH,
    ARTISTS_SUCCESS_RESULT,
    ARTISTS_ERROR_RESULT
} from './types';


const initialState = {
    searchText: '',
    total_count: 0,
    result: [],
    loading: false,
    error: false
  };

  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case ARTISTS_SEARCH:
        return {
          ...state,
          loading: true,
          searchText: action.payload
        };
      case ARTISTS_SUCCESS_RESULT:
        return {
          ...state,
          loading: false,
          error: false,
          result: action.result,
          total_count: action.total_count,
          prevPageToken: action.prevPageToken,
          nextPageToken: action.nextPageToken
        };
      case ARTISTS_ERROR_RESULT:
        return {
          ...state,
          loading: false,
          error: false,
          result: []
        };
      default:
        return state;
    }
  }