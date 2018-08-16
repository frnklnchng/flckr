import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import UploadForm from './upload_form';

const msp = (state) => {
  return {
    currentUserId: state.session.id
  };
};

const mdp = (dispatch) => {
  return {
    uploadPhoto: (photo) => dispatch(createPhoto(photo))
  }
};

export default connect(msp, mdp)(UploadForm);
