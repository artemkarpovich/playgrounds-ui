import map from 'lodash/map';
import * as accountSagas from './account';
import * as playgroundsSagas from './playgrounds';

export default function* rootSaga() {
  const sagas = { ...accountSagas, ...playgroundsSagas };
  yield map(sagas, saga => saga());
}
