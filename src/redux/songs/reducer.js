import {
    SONGS_SEARCH,
    SONGS_SUCCESS_RESULT,
    SONGS_ERROR_RESULT
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
      case SONGS_SEARCH:
        return {
          ...state,
          loading: true,
          searchText: action.payload
        };
      case SONGS_SUCCESS_RESULT:
        return {
          ...state,
          loading: false,
          error: false,
          result: action.result,
          total_count: action.total_count,
          prevPageToken: action.prevPageToken,
          nextPageToken: action.nextPageToken
        };
      case SONGS_ERROR_RESULT:
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