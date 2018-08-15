import { combineReducers } from 'redux';

import users from './users_reducer';
import photos from './photos_reducer';


export default combineReducers({
  users,
  photos
});