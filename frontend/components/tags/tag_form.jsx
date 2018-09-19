import React from 'react';
import { withRouter } from 'react-router-dom';

class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { label: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return (e) => this.setState({
      label: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const photoId = this.props.match.params.photoId;
    const tag = Object.assign({},
      this.state, {
        label: this.state.label,
        photo_id: photoId
      }
    );
    this.props.createTag(tag).then(this.setState({ label: '' }));
  }

  render() {
    return (
      <form className="tag-form-container" onSubmit={this.handleSubmit}>
        <input className="tag-form"
          type="text"
          placeholder="Add a tag"
          onChange={this.update()}
          value={this.state.label}
        />
      </form>
    );
  }
}

export default withRouter(TagForm);