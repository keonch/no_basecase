import React from 'react';

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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          {
            this.props.type === 'Sign Up' &&
            <div>
              <label>Display Name</label>
              <input
                type='text'
                placeholder='J. Doh'
                className='name'
                value={this.state.name}
                onChange={this.handleChange}/>
            </div>
          }

          <label>Email</label>
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

          <input type='submit' value={this.props.type}/>
        </form>
      </div>
    );
  }
}
