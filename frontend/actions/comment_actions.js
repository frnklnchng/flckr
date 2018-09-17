import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId
});

export const createComment = (comment) => dispatch => (
  CommentAPIUtil.createComment(comment).then(newComment => (
    dispatch(receiveComment(newComment))
  ))
);

export const deleteComment = (commentId) => dispatch => (
  CommentAPIUtil.deleteComment(commentId).then(comment => (
    dispatch(removeComment(comment))
  ))
);
