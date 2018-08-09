import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up',
    navLink: <p>Already have an account? <Link to="/login">Sign in</Link></p>
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(msp, mdp)(SessionForm);