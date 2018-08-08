import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPI from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  window.signup = SessionAPI.signup;
  window.login = SessionAPI.login;
  window.logout = SessionAPI.logout;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Flicker</h1>, root);
});
