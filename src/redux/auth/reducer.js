import {
    SET_ACCESS_TOKEN
  } from './types';
  
const INITIAL_STATE = {
    accessToken: {},
};
  
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ACCESS_TOKEN:
        return { ...state,
            accessToken: action.payload
        }
        default:
        return state;
    }
}