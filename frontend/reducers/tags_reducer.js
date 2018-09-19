import merge from 'lodash/merge';
import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG
} from '../actions/tag_actions';

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TAGS:
      return merge({}, state, action.tags);
    case RECEIVE_TAG:
      return merge({}, state, { [action.tag.id]: action.tag });
    case REMOVE_TAG:
      let newState = merge({}, state);
      delete newState[action.tagId];
      return newState;
    default:
      return state;
  }
};

export default tagsReducer;