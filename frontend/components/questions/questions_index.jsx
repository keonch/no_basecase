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
    // currentUser={this.props.currentUser || { id: null }}
    // deleteQuestion={this.props.deleteQuestion}

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
