import { combineReducers } from 'redux';
import auth from './auth';
import currency from './currency';

const rootReducer = combineReducers({
  auth,
  currency,
});

export default rootReducer;
