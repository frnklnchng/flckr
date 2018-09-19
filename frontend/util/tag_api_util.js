export const fetchTags = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/photos/${id}/tags`,
  })
};

export const createTag = (tag) => {
  return $.ajax({
    method: 'POST',
    url: `api/photos/${tag.photo_id}/tags`,
    data: { tag }
  })
};

export const deleteTag = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tags/${id}`
  })
};
