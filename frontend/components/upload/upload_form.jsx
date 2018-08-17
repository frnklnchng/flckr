import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      userId: this.props.currentUserId,
      photo: null,
      photoUrl: "",
      fileName: ""
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }
  
  handleFile(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();

    reader.onloadend = () => this.setState({
      photo: file, photoUrl: reader.result, fileName: file.name
    });

    if (file) {
      reader.readAsDataURL(file);
    }
    // else {
    //   this.setState({ photoUrl: "", file: null, fileName: ""});
    // }
  }

  handleUpload(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("photo[title]", this.state.title);
    formData.append("photo[description]", this.state.description);
    formData.append("photo[user_id]", this.state.userId);


    if (this.state.photo) {
      formData.append("photo[file]", this.state.photo);
    }

    this.props.uploadPhoto(formData).then(() => this.props.history.push("/home"));
  }

  renderFileName() {
    if (this.state.fileName) {
      return (
        <p className="upload-name">{this.state.fileName}</p>
      );
    }
  }

  render() {
    return (
      <div className="upload">
        <div className="upload-background"></div>
        <div className="upload-container">
          <Link to="/home"><img className="upload-back" src="https://i.imgur.com/NGOSiIP.png" /></Link>
          <form className="upload-form">
            <p className="upload-header">Upload</p>
            <img className="upload-preview" src={this.state.photoUrl} />
            {this.renderFileName()}
            <input className="upload-title"
              type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.update("title")}
            />
            <textarea className="upload-description"
              type="text"
              placeholder="Description"
              value={this.state.description}
              onChange={this.update("description")}
            />
            <div className="upload-bttns">
              <input type="file" name="upload-file-input" id="upload-file-input" accept="image/*" onChange={this.handleFile}></input>
              <label className="upload-file" htmlFor="upload-file-input">Browse</label>
              <button className="upload-submit-bttn" onClick={this.handleUpload}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(UploadForm);
