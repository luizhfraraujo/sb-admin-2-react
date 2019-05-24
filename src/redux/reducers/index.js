import { MenuOpenReducer } from './MenuOpenReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  menuState: MenuOpenReducer
});