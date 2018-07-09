import { connect } from 'react-redux';
import QuestionIndexItem from './questions_index_item';

const msp = (state, ownProps) => {
  const author = state.entities.users[ownProps.question.authorId] || {};
  return ({
    author
  });
};

export default connect(msp)(QuestionIndexItem);
