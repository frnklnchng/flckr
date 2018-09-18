export const fetchComments = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/photos/${id}/comments`,
  })
};

export const createComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: `api/photos/${comment.photo_id}/comments`,
    data: { comment }
  })
};

export const deleteComment = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  })
};
