import { all, takeEvery, put, call, select} from 'redux-saga/effects';
import * as actions from './actions';
import {
    SONGS_SEARCH,
    SONGS_SUCCESS_RESULT
} from './types';
import {httpClient} from '../../helpers/httpClient';

const getAccessToken = (state) => state.Auth


const onSearchRequest = async (artistId, token) =>{
    const request = {country: 'MX'}
    const headers = {Authorization: `${token.token_type} ${token.access_token}`}
    const response = await httpClient.get(`/artists/${artistId}/top-tracks`, request, headers)
    return response
}

function* searchRequest({ payload }) {
  //const { searchText, pageToken } = payload;
  let token = yield select(getAccessToken); // <-- get the project
  try {
    const searchResult = yield call(
      onSearchRequest,
      payload,
      token.accessToken
    );
    if (searchResult.data && searchResult.data.tracks) {
        const tracks = searchResult.data.tracks;
      yield put(
        actions.songsSearchSuccess(
            tracks,
            tracks.length,
            tracks.next,
            searchResult.prev
        )
      );
    } else {
      yield put(actions.songsSearchSuccess());
    }
  } catch (error) {
      console.log(error)
    yield put(actions.songsSearchSuccess());
  }
}
export default function* rootSaga() {
  yield all([takeEvery(SONGS_SEARCH, searchRequest)]);
}