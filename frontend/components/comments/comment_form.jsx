import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return (e) => this.setState({
      body: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const photoId = this.props.match.params.photoId;
    const comment = Object.assign({},
      this.state, {
        body: this.state.body,
        photo_id: photoId,
        user_id: this.props.userId
      }
    );
    this.props.createComment(comment).then(this.setState({ body: '' }));
  }

  render() {
    return (
      <form className="comment-form-container" onSubmit={this.handleSubmit}>
        <textarea className="comment-form"
          type = "text"
          placeholder="Add a comment"
          onChange={this.update()}
          value={this.state.body}
          rows="3"
        />
        <input className="comment-submit-bttn" type="submit" value="⏎"></input>
      </form>
    );
  }
}

export default withRouter(CommentForm);