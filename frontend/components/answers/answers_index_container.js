import { connect } from 'react-redux';
import {
  sortByVotes,
  sortByDate,
  sortByOldest
} from '../../reducers/selectors';

import AnswersIndex from './answers_index';

const msp = (state, ownProps) => {
  let sortedAnswerIds;
  switch (state.ui.sortAnswers) {
    case 'oldest':
      sortedAnswerIds = sortByOldest(state.entities.answers);
      break;
    case 'newest':
      sortedAnswerIds = sortByDate(state.entities.answers);
      break;
    default:
      sortedAnswerIds = sortByVotes(state.entities.answers);
      break;
  }
  return ({
    sortedAnswerIds
  });
};

export default connect(msp)(AnswersIndex);
