import React from 'react';
import QuestionIndexItem from './questions_index_item';
import { Link } from 'react-router-dom';

export default class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'top'
    };

    this.renderQuestions = this.renderQuestions.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchAllQuestions();
  }

  renderQuestions() {
    return (
      this.props.sortedQuestionIds.map((questionId) => {
        return (
          <QuestionIndexItem
            key={questionId}
            showTruncBody={this.props.page === 'questions'}
            question={this.props.questions[questionId]}/>
        );
      })
    );
  }

  render() {
    const header = this.props.page === 'root' ? 'Top Questions' : 'All Questions';
    return (
      <div>
        <div>
          <div>{header}</div>
          <Link to='questions/ask'>Ask Question</Link>
          {
            this.props.page === 'questions' &&
            <div>{this.props.sortedQuestionIds.length} questions</div>
          }
          <div>
            <button>Newest</button>
            <button>Votes</button>
            <button>Active</button>
            <button>Unanswered</button>
          </div>
        </div>

        <ul>{this.renderQuestions()}</ul>
      </div>
    );
  }
}
