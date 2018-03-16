import React from 'react';
import { connect } from 'react-redux';
import { clearQuestions } from '../../actions/question_actions';
import QuestionsIndexItemContainer from './questions_index_item_container';

class QuestionsSearch extends React.Component {

  renderQuestions() {
    const questions = Object.values(this.props.questions);
    if (questions.length < 1){
      return (
        <p>No Result</p>
      );
    }
    const index = questions.map((question, idx) => {
      const author = this.props.users[question.author_id];
      return (
        <QuestionsIndexItemContainer
          key={idx}
          question={question}
          author={author} />
      );
    });

    return index;
  }

  render() {
    return (
      <div className='questions-index-page'>

        <header className='questions-index-header'>
          <h3 className='questions-index-head'>Questions</h3>
        </header>

        <div className='questions-index'>
          { this.renderQuestions() }
        </div>
      </div>
    );
  }
}

const msp = state => {
  const users = Object.assign({}, state.entities.users);
  return ({
    questions: state.entities.questions,
    users
  });
};

const mdp = dispatch => {
  return ({
    clearQuestions: () => dispatch(clearQuestions())
  });
};

export default connect(msp, mdp)(QuestionsSearch);
