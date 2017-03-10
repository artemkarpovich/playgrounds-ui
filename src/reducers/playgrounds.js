import * as types from './../actions/playgrounds';

const initialState = {
  data: [],
  isFetching: false,
  errorMessage: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.PLAYGROUNDS_FETCH_REQUESTED:
      return {
        ...state,
        isFetching: true
      };
    case types.PLAYGROUNDS_FETCH_SUCCESSED:
      const normalizedArray = action.playgrounds.map(playground => {
        return {
          position: {
            lat: playground.latitude,
            lng: playground.longitude
          },
          key: playground.title,
          defaultAnimation: 2
        }
      });
      return {
        ...state,
        isFetching: false,
        data: normalizedArray
      };
    case types.PLAYGROUNDS_FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
}
