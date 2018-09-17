export const getComments = (state, photoId) => {
  let arr = [];
  const comments = Object.values(state);

  comments.forEach((comment) => {
    if (comment.photo_id === photoId) {
      arr.push(comment);
    }
  });

  return arr;
};