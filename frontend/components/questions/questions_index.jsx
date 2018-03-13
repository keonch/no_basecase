import React from 'react';

import QuestionsIndexItemContainer from './questions_index_item_container';

class QuestionsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllQuestions();
  }

  render () {

    const questions = this.props.questions.map((question, idx) => {
      const author = this.props.users[question.author_id];
      return (
        <QuestionsIndexItemContainer
          key={idx}
          question={question}
          author={author}
          />
      );
    });

    return (
      <div className='questions-index-page'>
        <header className='questions-index-header'>
          <h3 className='questions-index-head'>All Questions</h3>
        </header>
        <ul className='questions-index'>
          { questions }
        </ul>
      </div>
    );
  }
}

export default QuestionsIndex;
