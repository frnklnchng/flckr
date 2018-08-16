export const fetchAlbums = (id) => {
  return $.ajax({
    method: "GET",
    url: 'api/albums',
    data: { user_id: id }
  })
};

export const fetchAlbum = (id) => { 
  return $.ajax({
    method: "GET",
    url: `api/albums/${id}`,
  })
};

export const createAlbum = (album) => { 
  return $.ajax({
    method: "POST",
    url: 'api/albums',
    data: album,
    contentType: false,
    processData: false
  })
};

export const updateAlbum = (album) => {
  return $.ajax({
    method: "PATCH",
    url: `api/albums/${album.id}`,
    data: album,
    contentType: false,
    processData: false
  })
};

export const deleteAlbum = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/albums/${id}`
  })
};
