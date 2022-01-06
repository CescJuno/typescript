import { all } from 'redux-saga/effects';
import { authSaga } from './auth';
import { currencySaga } from './currency';

export default function* rootSaga() {
  yield all([authSaga(), currencySaga()]);
}
