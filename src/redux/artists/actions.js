import {
    ARTISTS_SEARCH,
    ARTISTS_SUCCESS_RESULT
  } from './types';


export const artistsSearch = searchText => ({
    type: ARTISTS_SEARCH,
    payload: searchText
});

export const artistsSearchSuccess = (
    result,
    total_count,
    nextPageToken,
    prevPageToken
  ) => ({
    type: ARTISTS_SUCCESS_RESULT,
    result,
    total_count,
    nextPageToken,
    prevPageToken
  })