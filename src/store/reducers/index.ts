import {combineReducers} from 'redux';
import userReducer from './userReduces';

export const reducers = combineReducers({
  user: userReducer
});