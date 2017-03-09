import { call, put, takeLatest } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { fetch, signin, logout } from './../api/account';
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

const signinAccount = function* (action) {
  try {
    const response = yield call(signin, action.payload);

    yield put({ type: types.ACCOUNT_SIGN_IN_SUCCESSED, account: response.data });
  } catch (error) {
    yield put({
      type: types.ACCOUNT_SIGN_IN_FAILED,
      error: errorResponseParser(error)
    });
  }
}

const logoutAccount = function* () {
  try {
    yield call(logout);

    yield put({ type: types.ACCOUNT_LOGOUT_SUCCESSED });
    yield call(browserHistory.push, '/login');
  } catch (error) {
    yield put({
      type: types.ACCOUNT_LOGOUT_FAILED,
      error: errorResponseParser(error)
    });
  }
}

export function* fetchAccountSaga() {
  yield takeLatest(types.ACCOUNT_FETCH_REQESTED, fetchAccount);
}

export function* signinAccountSaga() {
  yield takeLatest(types.ACCOUNT_SIGN_IN_REQUESTED, signinAccount);
}

export function* logoutAccountSaga() {
  yield takeLatest(types.ACCOUNT_LOGOUT_REQESTED, logoutAccount);
}
