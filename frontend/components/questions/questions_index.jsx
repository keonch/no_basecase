import React from 'react';
import QuestionsIndexItemContainer from './questions_index_item_container';
import QuestionsFrontItem from './questions_front_item';

class QuestionsIndex extends React.Component {

  componentDidMount() {
    if (this.props.frontPage) {
      this.props.fetchAllQuestionsFront();
    } else {
      this.props.fetchAllQuestions();
    }
    window.scrollTo(0, 0);
  }

  renderFront() {
    const index = this.props.sortedQuestions.map((questionId, idx) => {
      const question = this.props.questions[questionId]
      const author = this.props.users[question.author_id];
      return (
        <QuestionsFrontItem
          key={idx}
          question={question}
          author={author}/>
      );
    });
    return index;
  }

  renderQuestions() {
    const questions = Object.values(this.props.questions);
    const index = questions.map((question, idx) => {
      const author = this.props.users[question.author_id];
      if (!author) return;
      return (
        <QuestionsIndexItemContainer
          key={idx}
          question={question}
          author={author} />
        );
      });
    return index;
  }

  render () {
    return (
      <div className='questions-index-page'>

        <header className='questions-index-header'>
          {
            this.props.frontPage ?
              <h3 className='questions-index-head'>Top Questions</h3>
            :
              <h3 className='questions-index-head'>All Questions</h3>
          }
        </header>

        <div className='questions-index'>
          {
            this.props.frontPage ?
              this.renderFront()
            :
              this.renderQuestions()
          }
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.clearEntities();
  }
}

export default QuestionsIndex;
