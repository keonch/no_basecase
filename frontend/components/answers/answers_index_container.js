import { connect } from 'react-redux';
import { sortAnswersByVotes } from '../../reducers/selectors';

import AnswersIndex from './answers_index';

const msp = (state, ownProps) => {
  return ({
    sortedAnswerIds: sortAnswersByVotes(state.entities.answers)
  });
};

export default connect(msp)(AnswersIndex);
