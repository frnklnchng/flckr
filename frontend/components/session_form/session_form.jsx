import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      // need all - React controlled inputs
      username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.capitalize = this.capitalize.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemo(e) {
    e.preventDefault();
    
    const demo = { username: "demo", password: "demouser" };
    const demoUser = demo.username.split('');
    const demoPass = demo.password.split('');

    if (this.props.formType === "signup") {
      this.props.history.push("/login");
    }
    
    const ghost = setInterval(() => {
      if (demoUser.length) {
        this.setState({
          username: this.state.username + demoUser.shift()
        });
      }
      else if (demoPass.length) {
        this.setState({
          password: this.state.password + demoPass.shift()
        });
      }
      else {
        clearInterval(ghost);
        this.props.demo(demo);
      }
    }, 95);
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick(e) {
    this.node.contains(e.target) ? 'return' : this.props.history.push("/");
  }

  renderErrors() {
    const errors = this.props.errors.map((error, i) => {
      return (
        <li className="errors" key={`error-${i}`}>
          { error }.
        </li>
      );
    });

    return (
      <ul className="errors-list">
        { errors }
      </ul>
    );
  }

  // capitalize(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  render() {
    const extendedForm = () => {
      return (
        <div className="login-form-container">
          <br />
          <input className="login-firstname"
            type="text"
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.update('first_name')}
            maxLength="40"
          />
          <input className="login-lastname"
            type="text"
            placeholder="Last Name"
            value={this.state.last_name}
            onChange={this.update('last_name')}
            maxLength="40"
          />
          <input className="login-email"
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update('email')}
            maxLength="40"
          />
        </div>
      );
    };

    let formtype = this.props.formType === "signup" ? "Sign up" : "Log in";
    let bttntype = this.props.formType === "signup" ? "Sign Up" : "Log In";

    return (
      <div className="login-form-container" ref={node => this.node = node}>
        <form onSubmit={this.handleSubmit}>
          Flckr makes it easy to enjoy what matters most in your world.
          {" " + formtype + " now!"}
          <div className="login-form">
            {this.props.formType === "signup" ? extendedForm() : <br />}
            <input className="login-username"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.update('username')}
              maxLength="40"
            />
            <input className="login-password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
              maxLength="40"
            />
            {this.renderErrors()}
            <button className="submit-bttn" onClick={this.handleSubmit}>{bttntype}</button>
            <button className="demo-bttn" onClick={this.handleDemo}>Demo Login</button>
            <div className="session-form-ending-tag">{this.props.navLink}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);