export const getComments = (state, photoId) => {
  let arr = [];
  const comments = Object.values(state);

  comments.forEach((comment) => {
    if (comment.photo_id === parseInt(photoId)) {
      arr.push(comment);
    }
  });

  return arr;
};

export const getTags = (state, photoId) => {
  let arr = [];
  const tags = Object.values(state);

  tags.forEach((tag) => {
    if (tag.photo_id === parseInt(photoId)) {
      arr.push(tag);
    }
  });
  
  return arr;
};