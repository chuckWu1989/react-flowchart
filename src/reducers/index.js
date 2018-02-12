import { combineReducers } from 'redux-immutable';
import myReducer from './myReducer';

export default combineReducers({
  store: myReducer,
});
