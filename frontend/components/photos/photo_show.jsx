import React from 'react';
import ReactModal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import CommentFormContainer from '../comments/comment_form_container';

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
    ReactModal.setAppElement('body');
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
    this.props.updatePhoto(photo).then(() => this.closeModal());
  }

  handleDelete(id) {
    this.props.deletePhoto(id).then(() => this.props.history.push("/home"));
  }

  render() {
    const photo = this.props.photo;

    if (!photo) {
      return null;
      // return <div>Loading</div>;
    }

    const date = new Date(photo.created_at);
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const months = ["January", "February",
                        "March", "April",
                        "May", "June",
                        "July", "August",
                        "September", "October",
                        "November", "December"];
    let modifyButtons;

    const photoEditForm = () => {
      return (
        <form onSubmit={() => this.handleUpdate(this.state.formContent)}>
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
          <button type="submit" className="show-submit-edit-bttn">Update</button>
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

    if (this.props.currentUserId === photo.user_id) {
      modifyButtons = (
        <div className="modify-bttns">
          <button className="show-edit-bttn" onClick={this.openModal}>Edit</button>
          <button className="show-delete-bttn" onClick={() => this.handleDelete(photo.id)}>Delete</button>
        </div>
      );
    }

    return (
      <div className="show">
        <Link to="/home"><img className="show-back" src="https://i.imgur.com/NGOSiIP.png"/></Link>
        <div className="show-media">
          <img className="show-photo" src={`${photo.file}`} />
        </div>
        <div className="show-bottom">
          <div>
            <p className="show-title">{photo.title}</p>
            <Link to={`/users/${photo.user.id}`} className="show-user">
              <p className="show-user">{photo.user.first_name} {photo.user.last_name}</p>
            </Link>
            {/* <p className="show-user">{photo.user.first_name} {photo.user.last_name}</p> */}
            <p className="show-created"> {day} {months[month]} {year}</p>
            <p className="show-description">{photo.description}</p>
            {photoEditModal()}
            <hr />
          </div>
          <div>{modifyButtons}</div>
        </div>

        <div className="comments">
          <p>Comments</p>
          {this.props.comments.map((comment, idx) =>

            <div className="comment-container">
              <img src={comment.user.img_url} key={comment.id} className="comment-profile-pic" />
              <ul>
                <div className="comment-remove">
                  <li className="comment-user">{comment.user.username}</li>

                  {this.deleteCommentButton(comment, this.props.currentUser)}

                </div>
                <li className="comment-body" key={idx}>{comment.body}</li>
              </ul>
            </div>
          )}
        </div>

        <CommentFormContainer />
      </div>
    );
  }
}
export default withRouter(PhotoShow);
