import React from 'react';
import PhotoIndexItem from './photo_index_item'
import { withRouter } from 'react-router-dom';
import { ScaleLoader, DotLoader, ClimbingBoxLoader, BarLoader } from 'react-spinners';


class PhotoIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loadedItems: [] }
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  onLoad(indexItem) {
    this.setState(({ loadedItems }) => {
      return { loadedItems: loadedItems.concat(indexItem) }
    })
  }

  render() {
    let items = null;

    if (this.props.photos.length <= this.state.loadedItems.length) {
      items = this.props.photos.reverse().map(photo => {
        return <PhotoIndexItem key={photo.id} photo={ photo } />
      });
    }
    else {
      items = 
        <div className="photo-index-loading">
          <ScaleLoader height={70} width={8} margin={"4px"}/>
          {/* <ScaleLoader height={105} width={12} margin={"6px"}/> */}
          {/* <DotLoader size={80}/> */}
          {/* <ClimbingBoxLoader size={30}/> */}
          {/* <BarLoader height={8} width={300}/> */}
          {this.props.photos.map((photo, i) =>
            <img className="photo-index-preload"
              src={photo.file}
              onLoad={this.onLoad.bind(this, photo)}
              key={i}
            />
          )}
        </div>
    }

    return (
      <div className="photo-index">
        {items}
      </div>
    );
  }
}

export default withRouter(PhotoIndex);
