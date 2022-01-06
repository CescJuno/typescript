import rootReducer from 'reducers/modules/reducer';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import TokenSerice from 'services/TokenService';
import rootSaga from './modules/rootSaga';

const create = () => {
  const token = TokenSerice.get();
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    {
      auth: {
        token,
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default create;
