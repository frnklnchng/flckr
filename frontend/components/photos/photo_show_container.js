import { connect } from 'react-redux';
import { fetchPhoto, updatePhoto, deletePhoto } from '../../actions/photo_actions';
import { fetchComments, deleteComment } from '../../actions/comment_actions';
import { fetchTags, deleteTag } from '../../actions/tag_actions';
import { getComments, getTags } from '../../reducers/selectors'
import PhotoShow from './photo_show';


const msp = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    photo: state.entities.photos[ownProps.match.params.photoId],
    comments: getComments(state.entities.comments, ownProps.match.params.photoId),
    tags: getTags(state.entities.tags, ownProps.match.params.photoId)
  };
};

const mdp = (dispatch) => {
  return {
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    updatePhoto: (photo) => dispatch(updatePhoto(photo)),
    deletePhoto: (id) => dispatch(deletePhoto(id)),
    fetchComments: (id) => dispatch(fetchComments(id)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    fetchTags: (id) => dispatch(fetchTags(id)),
    deleteTag: (id) => dispatch(deleteTag(id))
  };
};

export default connect(msp, mdp)(PhotoShow);
