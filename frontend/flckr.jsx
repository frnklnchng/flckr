import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import * as SessionActions from './actions/session_actions'; // development

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };

    store = configureStore(preloadedState);
    delete window.currentUser;
  } 
  else {
    store = configureStore();
  }

  // ------- development -----------
  // window.signup = SessionActions.signup;
  // window.login = SessionActions.login;
  // window.logout = SessionActions.logout;
  window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // ------- development -----------
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
