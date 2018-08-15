import merge from 'lodash/merge';
import {
  RECEIVE_PHOTO,
  RECEIVE_PHOTOS,
  REMOVE_PHOTO
} from '../actions/photo_actions';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_PHOTO:
      return merge({}, state, { [action.photo.id]: action.photo });
    case REMOVE_PHOTO:
      let newState = merge({}, state);
      delete newState[action.photoId]
      return newState;
    default:
      return state;
  }
};

export default photosReducer;