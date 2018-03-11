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
    this.renderErrors = this.renderErrors.bind(this);
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

  renderErrors(field) {
    if (this.props.errors[field].length === 0) {
      return '';
    } else {
      return <div className={`error ${field}`}>{this.props.errors[field][0]}</div>;
    }
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

  renderSessionTabs (){
    let loginClass;
    let signupClass;
    if (this.props.formType === 'Log In') {
      loginClass = 'selectdSession session-login-tab';
      signupClass = 'unselectedSession session-signup-tab';
    } else {
      loginClass = 'unselectedSession session-login-tab';
      signupClass = 'selectdSession session-signup-tab';
    }
    return (
      <div className='session-tabs'>
        <Link to="/login" className={ loginClass }>Log in</Link>
        <Link to="/signup" className={ signupClass }>Sign up</Link>
      </div>
    );
  }

  render() {
    return (
      <div className="session">

        { this.renderSessionTabs() }

        <h3 className='session-header'>{this.props.message}</h3>

        <form onSubmit={this.handleSubmit} className="session-form">

          <div className='session-form-field'>

            { this.renderNameInput() }

            <label className='session-label'>Email{this.props.emailLabel}</label>
            <div className='session-field'>
              <input type="text" value={this.state.email} onChange={this.update('email')} className="session-input" placeholder='you@example.org'/>
              { this.renderErrors('email') }
            </div>

            <label className='session-label'>Password</label>
            <div className='session-field'>
              <input type="password" value={this.state.password} onChange={this.update('password')} className="session-input" placeholder='*********'/>
              { this.renderErrors('password') }
            </div>

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

  componentWillUnmount() {
    this.props.resetErrors();
  }
}


export default withRouter(SessionForm);
