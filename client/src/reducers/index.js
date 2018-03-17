import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import posts from './posts';
import bios from './bios';
const rootReducer = combineReducers( {
  user,
  flash,
  posts,
  bios,
} );

export default rootReducer;
