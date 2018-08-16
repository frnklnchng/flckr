import { RECEIVE_ALBUM_ERRORS } from '../actions/album_actions';

const albumErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALBUM_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default albumErrorsReducer;
