import { call, put, takeLatest } from 'redux-saga/effects';
import { getPlaygrounds } from './../api/playgrounds';
import * as types from './../actions/playgrounds';
import errorResponseParser from './../utils/errorResponseParser';

const fetchPlaygrounds = function* (action) {
  try {
    const response = yield call(getPlaygrounds);

    yield put({
      type: types.PLAYGROUNDS_FETCH_SUCCESSED,
      playgrounds: response.data
    });
  } catch (error) {

    yield put({
      type: types.PLAYGROUNDS_FETCH_FAILED,
      error: errorResponseParser(error)
    });
  }
}

export function* fetchPlaygroundsSaga() {
  yield takeLatest(types.PLAYGROUNDS_FETCH_REQUESTED, fetchPlaygrounds);
}
