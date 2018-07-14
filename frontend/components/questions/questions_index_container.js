import { connect } from 'react-redux';
import { fetchAllQuestions } from '../../actions/question_actions';
import { sortQuestionsBy } from '../../actions/ui_actions';
import {
  sortByVotes,
  sortByDate,
  sortByUnanswered,
  sortByActive
} from '../../reducers/selectors';

import QuestionsIndex from './questions_index';

const msp = (state, ownProps) => {
  let sortedQuestionIds;
  switch (state.ui.sortQuestions) {
    case 'unanswered':
      sortedQuestionIds = sortByUnanswered(state.entities.questions);
      break;
    case 'newest':
      sortedQuestionIds = sortByDate(state.entities.questions);
      break;
    case 'active':
      sortedQuestionIds = sortByActive(state.entities.questions);
      break;
    default:
      sortedQuestionIds = sortByVotes(state.entities.questions);
      break;
  }
  return ({
    page: ownProps.match.path,
    questions: state.entities.questions,
    sortType: state.ui.sortQuestions,
    sortedQuestionIds
  });
};

const mdp = (dispatch) => {
  return ({
    fetchAllQuestions: () => dispatch(fetchAllQuestions()),
    sortQuestionsBy: (sortState) => dispatch(sortQuestionsBy(sortState))
  });
};

export default connect(msp, mdp)(QuestionsIndex);
