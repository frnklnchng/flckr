import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const msp = (state) => (
  { loggedIn: Boolean(state.session.id) }
);

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
          <Redirect to="/home" />
        )
    )} />
  );
};

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route path={path} exact={exact} render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
          <Redirect to="/" />
        )
    )} />
  );
};


export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));