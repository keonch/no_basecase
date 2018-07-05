import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    switch (this.props.type) {
      case "Log In":
        this.props.login({
          email: this.state.email,
          password: this.state.password
        });
        break;
      case "Sign Up":
        this.props.signup({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        });
        break;
    }
  }

  handleChange(e) {
    const field = e.currentTarget.className;
    this.setState({
      [field]: e.currentTarget.value
    })
  }

  guestLogin() {
    this.props.login({
      email: 'goodguest@nobasecase.com',
      password: 'goodguest'
    });
  }

  render() {
    let login;
    let signup;
    let sessionLink;
    if (this.props.type === 'Sign Up') {
      login = 'inactive';
      signup = 'active';
      sessionLink = (
        <div>
          Already have an account?
          <Link className='link' to='login'> Log In</Link>
        </div>
      );
    } else {
      login = 'active';
      signup = 'inactive';
      sessionLink = (
        <div>
          Don't have an account?
          <Link className='link' to='signup'> Sign Up</Link>
        </div>
      );
    }

    return (
      <div className='session'>
        <div className='session-tabs'>
          <Link className={`session-tab ${login}`} to='/login'>
            Log In
          </Link>
          <Link className={`session-tab ${signup}`} to='/signup'>
            Sign Up
          </Link>
        </div>

        <header>{this.props.header}</header>

        <form className='session-form' onSubmit={this.handleSubmit}>
          {
            this.props.type === 'Sign Up' &&
            <div className='session-name'>
              <label>Display Name</label>
              <input
                type='text'
                placeholder='J. Doh'
                className='name'
                value={this.state.name}
                onChange={this.handleChange}/>
            </div>
          }

          <label>Email {this.props.emailTag}</label>
          <input
            type='text'
            placeholder='you@example.org'
            className='email'
            value={this.state.email}
            onChange={this.handleChange}/>

          <label>Password</label>
          <input
            type='password'
            placeholder='*********'
            className='password'
            value={this.state.password}
            onChange={this.handleChange}/>

          <input
            className='session-submit'
            type='submit'
            value={this.props.type}/>
        </form>

        <div className='session-links'>
          {sessionLink}
          <div className='link' onClick={this.guestLogin}>
            Log in as guest
          </div>
        </div>
      </div>
    );
  }
}
