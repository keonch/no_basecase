import { connect } from 'react-redux';
import { getSortedAnswerIds } from '../../reducers/selectors';

import AnswersIndex from './answers_index';

const msp = (state, ownProps) => {
  const sortType = state.ui.sortAnswers,
        answers = state.entities.answers;

  return ({
    sortedAnswerIds: getSortedAnswerIds(sortType, answers)
  });
};

export default connect(msp)(AnswersIndex);
