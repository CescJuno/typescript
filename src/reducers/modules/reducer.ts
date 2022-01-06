import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { History } from 'history';
import auth from './auth';
import currency from './currency';

const rootReducer = history =>
  combineReducers({
    auth,
    currency,
    router: connectRouter(history),
  });

export default rootReducer;
