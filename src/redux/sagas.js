import { all } from 'redux-saga/effects';
import artistsSagas from './artists/sagas';
import songsSagas from './songs/sagas';


export default function* rootSaga(getState) {
  yield all([
    artistsSagas(),
    songsSagas()
  ]);
}