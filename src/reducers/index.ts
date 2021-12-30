import { combineReducers } from 'redux';
import currencyReducer from './apis/currency';

const rootReducer = combineReducers({ currencyReducer });

export default rootReducer;
