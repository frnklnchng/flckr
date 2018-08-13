import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Log In</Link>
      {<br></br>}
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
  
  const userGreeting = () => (
    <div className="nav">
      <Link to="/">
        <div className="nav-logo">flicker</div>
      </Link>
      <div className="nav-greeting">
        <span className="nav-name">
          Yo, {currentUser.username}!
        </span>
        <Link to="/">
          <button className="nav-signout" onClick={logout}>Sign Out</button>
        </Link>
      </div>
    </div>
  );

  return currentUser ? userGreeting() : sessionLinks();
};

export default Greeting;