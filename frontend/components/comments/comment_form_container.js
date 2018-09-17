import { connect } from 'react-redux';
import { createComment, deleteComment } from '../../actions/photo_actions';
import CommentForm from './comment_form';

const msp = (state) => {
  return {
    userId: state.entities.users[state.session.id].id
  };
};

const mdp = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id))
  };
};

export default connect(msp, mdp)(CommentForm);