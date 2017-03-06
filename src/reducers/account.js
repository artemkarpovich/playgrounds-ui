import {
  ACCOUNT_FETCH_REQESTED,
  ACCOUNT_FETCH_SUCCESSED,
  ACCOUNT_FETCH_FAILED
} from './../actions/account';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  errorMessage: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case ACCOUNT_FETCH_REQESTED:
      return {
        ...state,
        isFetching: true
      };
    case ACCOUNT_FETCH_SUCCESSED:
      return {
        ...state,
        info: action.account,
        isFetching: false,
        isAuthenticated: true,
      };
    case ACCOUNT_FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.error
      }
    default:
      return state;
  }
}
