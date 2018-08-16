export const fetchPhotos = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/photos'
  })
};

export const fetchPhoto = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  })
};

export const createPhoto = (photo) => {
  return $.ajax({
    method: 'POST',
    url: 'api/photos',
    data: photo, 
    contentType: false,
    processData: false
  })
};

export const updatePhoto = (photo) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/photos/${photo.id}`,
    data: { photo }
  })
};

export const deletePhoto = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`
  })
};
