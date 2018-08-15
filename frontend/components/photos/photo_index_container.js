import { connect } from 'react-redux';
import { fetchPhoto, fetchPhotos } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';

const msp = (state) => {
  return {
    photos: Object.values(state.entities.photos)
  };
};

const mdp = (dispatch) => {
  return {
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    fetchPhotos: () => dispatch(fetchPhotos())
  }
};

export default connect(msp, mdp)(PhotoIndex);
