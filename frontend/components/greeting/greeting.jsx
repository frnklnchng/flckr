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
        <div className="nav-logo">flckr</div>
      </Link>
      <div className="nav-greeting">
        <Link to="/upload">
          {/* <div className="nav-upload"><img className="nav-upload-icon" src="../../../app/assets/images/upload.png" alt="Upload"></img></div> */}
          <div className="nav-upload"><img className="nav-upload-icon" src="https://i.imgur.com/TxJeT7r.png" alt="Upload"></img></div>
        </Link>
        <Link to="/albums">
          <button className="nav-albums">Albums</button>
        </Link>
        <span className="nav-name">
          Hi, {currentUser.username}!
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