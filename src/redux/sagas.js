import { all } from 'redux-saga/effects';
import artistsSagas from './artists/sagas';


export default function* rootSaga(getState) {
  yield all([
    artistsSagas(),
  ]);
}