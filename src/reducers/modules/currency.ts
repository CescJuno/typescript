import { Action, createActions, handleActions } from 'redux-actions';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import CurrencyService from 'services/CurrencyService';
import { CurrencyState } from 'types';

const initialState: CurrencyState = {
  currency: {},
  loading: false,
  error: null,
};
const prefix = 'test/auth';

export const { pending, success, fail } = createActions(
  'PENDING',
  'SUCCESS',
  'FAIL',
  { prefix },
);

const reducer = handleActions<CurrencyState, unknown>(
  {
    PENDING: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      currency: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      currency: action.payload,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix },
);
export default reducer;

export const { getCurrency } = createActions('GET_CURRENCY', { prefix });

function* getCurrencySaga() {
  try {
    yield put(pending());
    const res: unknown = yield call(CurrencyService.get);
    yield put(success(res));
  } catch (e) {
    // yield put(fail(new Error(e?.response?.data.error || `UNKNOWN_ERROR`)));
  }
}

export function* currencySaga() {
  yield takeEvery(`${prefix}/GET_CURRENCY`, getCurrencySaga);
}
