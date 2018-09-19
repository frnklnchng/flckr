import * as TagAPIUtil from '../util/tag_api_util';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

export const receiveTags = (tags) => ({
  type: RECEIVE_TAGS,
  tags
});

export const receiveTag = (tag) => ({
  type: RECEIVE_TAG,
  tag
});

export const removeTag = (tag) => ({
  type: REMOVE_TAG,
  tagId: tag.id
});

export const fetchTags = (id) => dispatch => (
  TagAPIUtil.fetchTags(id).then(tags => (
    dispatch(receiveTags(tags))
  ))
);

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
