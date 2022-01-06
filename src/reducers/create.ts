import rootReducer from 'reducers/modules/reducer';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import TokenSerice from 'services/TokenService';
import history from '../historys';
import rootSaga from './modules/rootSaga';

const create = () => {
  const token = TokenSerice.get();
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer(history),
    {
      auth: {
        token,
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, routerMiddleware(history)),
    ),
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default create;
