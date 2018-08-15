import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';

export const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

export const receivePhotos = (photos) => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const removePhoto = (photoId) => ({
  type: REMOVE_PHOTO,
  photoId
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors
});

export const fetchPhotos = (id) => dispatch => (
  PhotoAPIUtil.fetchPhotos(id).then(photos => (
    dispatch(receivePhotos(photos))
  ))
);

export const fetchPhoto = (id) => dispatch => (
  PhotoAPIUtil.fetchPhoto(id).then(photo => (
    dispatch(receivePhoto(photo))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createPhoto = (photo) => dispatch => (
  PhotoAPIUtil.createPhoto(photo).then(newPhoto => (
    dispatch(receivePhoto(newPhoto))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updatePhoto = (photo) => dispatch => (
  PhotoAPIUtil.updatePhoto(photo).then(newPhoto => (
    dispatch(receivePhoto(newPhoto))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deletePhoto = (id) => dispatch => (
  PhotoAPIUtil.deletePhoto(id).then(photo => (
    dispatch(removePhoto(photo))
  ))
);

