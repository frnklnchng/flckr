import { combineReducers } from 'redux';

import users from './users_reducer';
import photos from './photos_reducer';
import albums from './albums_reducer';
import comments from './comments_reducer';

export default combineReducers({
  users,
  photos,
  albums,
  comments
});