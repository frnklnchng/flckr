import React from 'react';
import { Link } from 'react-router-dom';

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  handleImageLoaded() {
    // console.log("loaded");
    this.setState({ loaded: true });
  }
  
  render() {
    const photo = this.props.photo;

    return (
      <div className="photo-index-item">
        <Link to={`/photos/${photo.id}`}>
          <img className="photo-index-img" src={photo.file} onLoad={this.handleImageLoaded}
            style={!this.state.loaded ? { opacity: 0 } : {}} />
        </Link>
        <div className="piii-header">
          <div className="piii-header-title">{photo.title}</div>
          by&nbsp;
          <Link to={`/users/${photo.user.id}`}>{photo.user.username}</Link>
        </div>
      </div>
    );
  }
};


export default PhotoIndexItem;
