import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './../reducers';
import rootSaga from './../sagas';

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers(rootReducer);

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  console.log(store.getState(), 'store is updated');
});

export default store;
