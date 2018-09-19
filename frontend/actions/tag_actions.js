import * as TagAPIUtil from '../util/tag_api_util';

export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

export const receiveTag = (tag) => ({
  type: RECEIVE_TAG,
  tag
});

export const removeTag = (tag) => ({
  type: REMOVE_TAG,
  tagId: tag.id
});

export const createTag = (tag) => dispatch => (
  TagAPIUtil.createTag(tag).then(newTag => (
    dispatch(receiveTag(newTag))
  ))
);

export const deleteTag = (tagId) => dispatch => (
  TagAPIUtil.deleteTag(tagId).then(tag => (
    dispatch(removeTag(tag))
  ))
);