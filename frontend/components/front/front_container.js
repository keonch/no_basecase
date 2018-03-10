import { connect } from 'react-redux';

import Front from './front';

const msp = state => {
  const questions = Object.values(state.entities.questions);
  return ({
    questions
  });
};

const mdp = dispatch => {
  return ({

  });
};

export default connect(msp, mdp)(Front);
