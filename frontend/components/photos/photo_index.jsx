import React from 'react';
import PhotoIndexItem from './photo_index_item'

class PhotoIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    let items = null;

    if (this.props.photos) {
      items = this.props.photos.map(photo => {
        return <PhotoIndexItem key={photo.id} photo={ photo }/>
      });
    }

    return (
      <div className="photo-index">
        {items}
      </div>
    );
  }
}

export default PhotoIndex;
