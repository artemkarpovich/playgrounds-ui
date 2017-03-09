import * as types from './../actions/account';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  errorMessage: null,
  info: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.ACCOUNT_FETCH_REQESTED:
      return {
        ...state,
        isFetching: true
      };
    case types.ACCOUNT_FETCH_SUCCESSED:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: null,
        info: action.account,
      };
    case types.ACCOUNT_FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.error,
        info: {}
      };
    case types.ACCOUNT_SIGN_IN_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case types.ACCOUNT_SIGN_IN_SUCCESSED:
      return {
        ...state,
        isAuthenticated: true,
        isFetching: false,
        errorMessage: null,
        info: action.account
      };
    case types.ACCOUNT_SIGN_IN_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.error,
        info: {}
      };
    case types.ACCOUNT_LOGOUT_REQESTED:
      return {
        ...state,
        isFetching: true
      };
    case types.ACCOUNT_LOGOUT_SUCCESSED:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        info: {},
        errorMessage: null,
      };
    case types.ACCOUNT_LOGOUT_FAILED:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        info: {},
        errorMessage: action.error
      };
    default:
      return state;
  }
}
