import map from 'lodash/map';
import * as accountSagas from './account';

export default function* rootSaga() {
  const sagas = accountSagas;
  yield map(sagas, saga => saga());
}
