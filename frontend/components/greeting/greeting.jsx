import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Log In</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
  const userGreeting = () => (
    <div className="header-group">
      <h2 className="header-name">Yo, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Sign Out</button>
    </div>
  );

  return currentUser ? userGreeting() : sessionLinks();
};

export default Greeting;