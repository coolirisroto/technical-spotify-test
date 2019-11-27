import {
    LIKE_SONG,
    ARTISTS_SUCCESS_RESULT
  } from './types';


export const likeSong = song => ({
    type: LIKE_SONG,
    payload: song
});