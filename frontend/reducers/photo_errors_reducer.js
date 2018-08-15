import { RECEIVE_PHOTO_ERRORS } from '../actions/photo_actions';

const photoErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default photoErrorsReducer;
