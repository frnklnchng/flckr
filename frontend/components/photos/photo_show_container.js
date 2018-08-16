import { connect } from 'react-redux';
import { fetchPhoto, updatePhoto, deletePhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';


const msp = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    photo: state.entities.photos[ownProps.match.params.photoId]
    // photo: state.entities.photos[ownProps.match.params.photoId] || {}
  };
};

const mdp = (dispatch) => {
  return {
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    updatePhoto: (photo) => dispatch(updatePhoto(photo)),
    deletePhoto: (id) => dispatch(deletePhoto(id))
  };
};

export default connect(msp, mdp)(PhotoShow);
