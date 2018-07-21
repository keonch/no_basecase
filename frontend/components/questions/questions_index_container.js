import { connect } from 'react-redux';
import { fetchAllQuestions } from '../../actions/question_actions';
import { sortQuestionsBy } from '../../actions/ui_actions';
import { getSortedQuestionIds } from '../../reducers/selectors';

import QuestionsIndex from './questions_index';

const msp = (state, ownProps) => {
  const questions = state.entities.questions,
        sortType = state.ui.sortQuestions;

  return ({
    page: ownProps.match.path,
    questions,
    sortType,
    sortedQuestionIds: getSortedQuestionIds(sortType, questions)
  });
};

const mdp = (dispatch) => {
  return ({
    fetchAllQuestions: () => dispatch(fetchAllQuestions()),
    sortQuestionsBy: (sortState) => dispatch(sortQuestionsBy(sortState))
  });
};

export default connect(msp, mdp)(QuestionsIndex);
