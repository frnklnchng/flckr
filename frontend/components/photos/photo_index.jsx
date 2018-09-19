import React from 'react';
import PhotoIndexItem from './photo_index_item'
import { withRouter } from 'react-router-dom';


class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    let items = null;

    if (this.props.photos) {
      items = this.props.photos.reverse().map(photo => {
        return <PhotoIndexItem key={photo.id} photo={ photo } loaded={ false } />
      });
    }

    return (
      <div className="photo-index">
        {items}
      </div>
    );
  }
}

export default withRouter(PhotoIndex);
