import React from 'react';
import ReactModal from 'react-modal';
import { withRouter } from 'react-router-dom';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      // need all - React controlled inputs
      photo: {
        title: '',
        description: ''
      },
      formContent: {
        id: '',
        title: '',
        description: ''
      }
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  update(field) {
    const newState = Object.assign(this.state);

    return (e) => {
      newState.formContent[field] = e.currentTarget.value;
      this.setState(newState);
    };
  }

  openModal() {
    this.setState({
      showModal: true,
      formContent: { 
        title: this.props.photo.title, 
        description: this.props.photo.description,
        id: this.props.photo.id
      }
    });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  handleUpdate(photo) {
    this.props.updatePhoto(photo).then(this.closeModal());
  }

  handleDelete(id) {
    this.props.deletePhoto(id).then(this.props.history.push("/home"));
  }

  render() {
    const photo = this.props.photo;

    if (!photo) {
      return null;
      // return <div>Loading</div>;
    }

    let modify;

    if (this.props.currentUserId === photo.user_id) {
      modify = (
        <div className="modify-bttns">
          <button className="show-edit-bttn" onClick={this.openModal}>Edit</button>
          <button className="show-delete-bttn" onClick={() => this.handleDelete(photo.id)}>Delete</button>
        </div>
      );
    }

    const photoEditForm = () => {
      return (
        <form>
          <input className="show-edit-title"
            type="text"
            placeholder="Title"
            value={this.state.formContent.title}
            onChange={this.update('title')}
          />
          <textarea className="show-edit-description"
            type="text"
            placeholder="Description"
            value={this.state.formContent.description}
            onChange={this.update('description')}
          />
          <button className="show-submit-edit-bttn" onClick={() => this.handleUpdate(this.state.formContent)}>Update</button>
        </form>
      );
    };

    const photoEditModal = () => {
      return (
        <ReactModal className="show-edit-modal"
          isOpen={this.state.showModal}
          contentLabel="Upload modal"
          onRequestClose={this.closeModal}
          overlayClassName="show-edit-overlay">
          {photoEditForm()}
        </ReactModal>
      );
    };

    return (
      <div className="show">
        <div className="show-media">
          <img className="show-photo" src={`${photo.file}`} />
        </div>
        <div className="show-bottom">
          <div>
            <p className="show-title">{photo.title}</p>
            <p className="show-description">{photo.description}</p>
            {photoEditModal()}
            <hr />
          </div>
          <div>{modify}</div>
        </div>
      </div>
    );
  }
}
export default withRouter(PhotoShow);
