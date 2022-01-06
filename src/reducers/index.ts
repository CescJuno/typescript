import { combineReducers } from 'redux';
import currency from './apis/currency';

const rootReducer = combineReducers({ currency });

export default rootReducer;
