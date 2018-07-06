import { connect } from 'react-redux';
import Author from './author';

const msp = (state, ownProps) => {
  const author = state.entities.users[ownProps.authorId] || {};
  return ({
    author
  });
};

export default connect(msp, null)(Author);
