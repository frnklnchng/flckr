import merge from 'lodash/merge';
import {
  RECEIVE_ALBUM,
  RECEIVE_ALBUMS,
  REMOVE_ALBUM
} from '../actions/album_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALBUMS:
      return merge({}, action.albums);
    case RECEIVE_ALBUM:
      return merge({}, state, { [action.album.id]: action.album });
    case REMOVE_ALBUM:
      let newState = merge({}, state);
      delete newState[action.albumId]
      return newState;
    default:
      return state;
  }
};

export default albumsReducer;