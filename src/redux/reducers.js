/* eslint-disable */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Auth from './auth/reducer'
import Artists from './artists/reducer'
import Songs from './songs/reducer'
import Likes from './likes/reducer'

export default history =>
  combineReducers({
    router: connectRouter(history),
    Artists,
    Auth,
    Songs,
    Likes
  });
