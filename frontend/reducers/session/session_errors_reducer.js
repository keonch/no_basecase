import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from '../../actions/session_actions';

const parseErrors = (railsErrors = []) => {
  const errors = {
    email: [],
    password: []
  }

  railsErrors.forEach((error) => {
    switch (error) {
      case "Email can't be blank":
        return errors.email.push("Email cannot be empty.");
      case "Email not an email":
        return errors.email.push("is not a valid email address.");
      case "Password can't be blank":
        return errors.password.push("Password cannot be empty.");
      case "Password is too short (minimum is 6 characters)":
        return errors.password.push("Email cannot be empty");
      case "The email or password is incorrect":
        return errors.email.push(error);
      default:
        return null;
    }
  });

  return errors;
};

export default (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return parseErrors(action.errors);
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }
};
