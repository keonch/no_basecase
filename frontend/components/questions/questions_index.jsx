import React from 'react';

import QuestionsIndexItem from './questions_index_item';

class QuestionsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllQuestions();
  }

  render () {
    const questions = this.props.questions.map((question, idx) => {
      const author = this.props.users[question.author_id];
      return (
        <QuestionsIndexItem key={idx} question={question} author={author} />
      );
    });

    return (
      <div className='questions'>
        <header className='questions-header'>
          <h3 className='questions-head'>All Questions</h3>
        </header>
        <ul>
          { questions }
        </ul>
      </div>
    );
  }
}

export default QuestionsIndex;
