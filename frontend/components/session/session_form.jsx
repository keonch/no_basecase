import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderNameInput(){
    if (this.props.formType === 'Sign Up') {
      return (
        <div className='session-name-field'>
          <label className='session-label'>Display Name</label>
          <br></br>
          <input type='text' value={this.state.name} onChange={this.update('name')} className='session-name-input' placeholder='J. Doh'/>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="session">
        <div className='session-tabs'>
          <Link to="/login" className='session-tab-btn'>Log in</Link>
          <Link to="/signup" className='session-tab-btn'>Sign up</Link>
        </div>

        <h3 className='session-header'>{this.props.message}</h3>

        { this.renderErrors() }

        <form onSubmit={this.handleSubmit} className="session-form">

          <div className='session-form-field'>

            { this.renderNameInput() }

            <label className='session-label'>Email{this.props.emailLabel}</label>
            <input type="text" value={this.state.email} onChange={this.update('email')} className="session-input" placeholder='you@example.org'/>

            <label className='session-label'>Password</label>
            <input type="password" value={this.state.password} onChange={this.update('password')} className="session-input" placeholder='*********'/>

            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>

          <div className='session-redirect'>
            <div>{ this.props.redirectMessage }{ this.props.redirectLink }</div>
            <div className='session-employer'>Are you an employer? <Link to='/' className='session-link'>A placeholder link</Link></div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
