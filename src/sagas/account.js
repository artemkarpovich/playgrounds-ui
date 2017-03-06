import { call, put, takeLatest } from 'redux-saga/effects';

import { fetch } from './../api/account';
import * as types from './../actions/account';
import errorResponseParser from './../utils/errorResponseParser';

const fetchAccount = function* (action) {
  try {
    const response = yield call(fetch);

    yield put({ type: types.ACCOUNT_FETCH_SUCCESSED, account: response.data });
  } catch (error) {
    yield put({
      type: types.ACCOUNT_FETCH_FAILED,
      error: errorResponseParser(error)
    });
  }
}

export function* fetchAccountSaga() {
  yield takeLatest(types.ACCOUNT_FETCH_REQESTED, fetchAccount);
}
