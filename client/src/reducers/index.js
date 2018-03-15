import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';

const rootReducer = combineReducers( {
  user,
  flash,
  posts,
} );

export default rootReducer;
