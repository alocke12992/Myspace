import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import posts from './posts';
import bios from './bios';
import comments from './comments'

const rootReducer = combineReducers( {
  user,
  flash,
  posts,
  bios,
  // comments,
} );

export default rootReducer;
