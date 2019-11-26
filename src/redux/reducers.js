/* eslint-disable */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Artists from './artists/reducer'
import Auth from './auth/reducer'

export default history =>
  combineReducers({
    router: connectRouter(history),
    Artists,
    Auth
  });
