import { connect } from 'react-redux';
import { createTag } from '../../actions/tag_actions';
import TagForm from './tag_form';

const mdp = (dispatch) => {
  return {
    createTag: (tag) => dispatch(createTag(tag))
  };
};

export default connect(() => ({}), mdp)(TagForm);