import {
    SONGS_SEARCH,
    SONGS_SUCCESS_RESULT
  } from './types';


export const songsSearch = artistId => ({
    type: SONGS_SEARCH,
    payload: artistId
});

export const songsSearchSuccess = (
    result,
    total_count,
    nextPageToken,
    prevPageToken
  ) => ({
    type: SONGS_SUCCESS_RESULT,
    result,
    total_count,
    nextPageToken,
    prevPageToken
  })