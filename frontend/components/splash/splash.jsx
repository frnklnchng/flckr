import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
// import { receiveErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    ReactModal.setAppElement('#root');
  }

  componentWillUnmount() {
    this.closeModal();
  }

  openModal(formType) {
    this.props.clearErrors();
    
    return () => {
      this.setState({ showModal: true });
      this.props.history.push(formType);
    };
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="splash">
        <div className="splash-nav">
          <Link to="/">
            <h2 className="splash-logo">flckr</h2>
          </Link>
          <div className="splash-auth">
            <button className="splash-login" onClick={this.openModal('login')}>Log In</button>
            <button className="splash-signup" onClick={this.openModal('signup')}>Sign Up</button>
          </div>
        </div>

        <ReactModal className="Modal"
          isOpen={this.state.showModal}
          contentLabel="UserAuth modal"
          onRequestClose={this.closeModal}
          overlayClassName="Overlay">
          <SessionFormContainer location={this.props.location}/>
        </ReactModal>

        <div className="splash-title">
          <h1>What we see depends mainly on what we look for.</h1>
        </div>
      </div>
    );
  }
}

export default Splash;