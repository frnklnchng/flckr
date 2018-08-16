import * as AlbumAPIUtil from '../util/album_api_util';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS';

export const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album
});

export const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const removeAlbum = (albumId) => ({
  type: REMOVE_ALBUM,
  albumId
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ALBUM_ERRORS,
  errors
});

export const fetchAlbums = (id) => dispatch => (
  AlbumAPIUtil.fetchAlbums(id).then(albums => (
    dispatch(receiveAlbums(albums))
  ))
);

export const fetchAlbum = (id) => dispatch => (
  AlbumAPIUtil.fetchAlbum(id).then(album => (
    dispatch(receiveAlbum(album))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createAlbum = (album) => dispatch => (
  AlbumAPIUtil.createAlbum(album).then(newAlbum => (
    dispatch(receiveAlbum(newAlbum))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateAlbum = (album) => dispatch => (
  AlbumAPIUtil.updateAlbum(album).then(newAlbum => (
    dispatch(receiveAlbum(newAlbum))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteAlbum = (id) => dispatch => (
  AlbumAPIUtil.deleteAlbum(id).then(album => (
    dispatch(removeAlbum(album))
  ))
);

