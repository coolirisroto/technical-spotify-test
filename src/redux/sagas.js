import { all } from 'redux-saga/effects';
import artistsSagas from './artists/saga';


export default function* rootSaga(getState) {
  yield all([
    artistsSagas(),
  ]);
}