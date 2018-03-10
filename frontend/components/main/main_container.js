import { connect } from 'react-redux';

import Main from './main';

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

export default connect(msp, mdp)(Main);
