export const getComments = (commentsState, photoId) => {
  let result = [];
  const comments = Object.values(commentsState);

  comments.forEach(comment => {
    if (comment.photo_id === photoId) {
      result.push(comment);
    }
  });
  
  return result;
};