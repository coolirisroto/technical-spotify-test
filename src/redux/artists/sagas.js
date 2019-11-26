import { all, takeEvery, put, call, select} from 'redux-saga/effects';
import * as actions from './actions';
import {
    ARTISTS_SEARCH,
    ARTISTS_SUCCESS_RESULT
} from './types';
import {httpClient} from '../../helpers/httpClient';
export const per_page = 10;
const maxResults = 10;

const getAccessToken = (state) => state.Auth


const onSearchRequest = async (searchText, token) =>{
    const request = {
        q:searchText, 
        type:'artist',
        limit:20,
    }
    const headers = {Authorization: `${token.token_type} ${token.access_token}`}
    const response = await httpClient.get('/search', request, headers)
    return response
}

function* searchRequest({ payload }) {
    console.log(payload)
  //const { searchText, pageToken } = payload;
  let token = yield select(getAccessToken); // <-- get the project
  try {
    const searchResult = yield call(
      onSearchRequest,
      payload,
      token.accessToken
    );
    if (searchResult.data && searchResult.data.artists) {
        const artists = searchResult.data.artists;
      yield put(
        actions.artistsSearchSuccess(
            artists.items,
            artists.total,
            artists.next,
            searchResult.prev
        )
      );
    } else {
      yield put(actions.artistsSearchSuccess());
    }
  } catch (error) {
      console.log(error)
    yield put(actions.artistsSearchSuccess());
  }
}
export default function* rootSaga() {
  yield all([takeEvery(ARTISTS_SEARCH, searchRequest)]);
}