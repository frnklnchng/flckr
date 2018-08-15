import React from 'react';
import { Link } from 'react-router-dom';

class PhotoIndexItem extends React.Component {
  render() {
    const photo = this.props.photo;

    return (
      <div className="photo-index-item">
        <div className="piii-header">
          <h1>{photo.title} by <Link to={`/users/${photo.user.id}`}>{photo.user.username}</Link></h1>
        </div>
        <Link to={`/photos/${photo.id}`}>
          <img className="photo-index-img" src={photo.file} />
        </Link>
      </div>
    );
  }
};


export default PhotoIndexItem;
