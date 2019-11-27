/* eslint-disable */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Artists from './artists/reducer'
import Auth from './auth/reducer'
import Songs from './songs/reducer'

export default history =>
  combineReducers({
    router: connectRouter(history),
    Artists,
    Auth,
    Songs
  });
