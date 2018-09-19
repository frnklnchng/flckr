import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  commentId: comment.id
});

export const fetchComments = (id) => dispatch => (
  CommentAPIUtil.fetchComments(id).then(comments => (
    dispatch(receiveComments(comments))
  ))
);

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
