import { Action, createActions, handleActions } from 'redux-actions';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import TokenSerice from 'services/TokenService';
import UserService from 'services/UserService';
import { AuthState, LoginReqType } from 'types';

const initialState: AuthState = {
  token: null,
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

const reducer = handleActions<AuthState, string>(
  {
    PENDING: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      token: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      token: action.payload,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix },
);
export default reducer;

export const { login, logout } = createActions('LOGIN', 'LOGOUT', { prefix });

function* loginSaga(action: Action<LoginReqType>) {
  try {
    yield put(pending());
    const token: string = yield call(UserService.login, action.payload);
    TokenSerice.set(token);
    yield put(success(token));
    // yield put(push('/'));
  } catch (error) {
    // yield put(fail(new Error(error?.response?.data.error || `UNKNOWN_ERROR`)));
  }
}

function* logoutSaga() {
  try {
    yield put(pending());
    const token: string = yield select(state => state.auth.token);
    yield call(UserService.logout, token);
    TokenSerice.set(token);
    // yield put(push('/'));
  } catch (e) {
    console.log(e);
  } finally {
    TokenSerice.remove();
    yield put(success(null));
  }
}
export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga);
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}
