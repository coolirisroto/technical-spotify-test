import {
    LIKE_SONG,
} from './types';


const initialState = {
    result: [],
    loading: false,
  };

  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case LIKE_SONG:
        let likes = [...state.result]
        const song = action.payload;
        const songLiked = likes.find(x=>x.id === song.id);
        if(!songLiked){
            likes = [...likes, song];
        }
        return {
          ...state,
          result: likes
        };
      default:
        return state;
    }
  }