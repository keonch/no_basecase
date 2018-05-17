import { connect } from 'react-redux';
import QuestionsIndexItem from './questions_index_item';


const msp = (state, ownProps) => {
  const currentUser = state.session.currentUser || { id: null };

  const isOwner = currentUser.id === ownProps.author.id;

  return ({
    isOwner
  });
};

const mdp = (dispatch) => {
  return ({
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
  });
};

export default connect(msp, mdp)(QuestionsIndexItem);
