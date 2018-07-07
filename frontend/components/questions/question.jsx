import React from 'react';
import Quill from 'react-quill';
import Author from '../users/author_container';
import AnswersIndex from '../answers/answers_index_container';
import AnswerForm from '../forms/answer_form_container';
import { Redirect } from 'react-router-dom';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      redirect: false,
      sortType: 'votes'
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchQuestion(this.props.questionId)
    .then(() => this.setState({ loaded: true }));
  }

  handleDelete() {
    this.props.deleteQuestion(this.props.questionId)
    .then(() => this.setState({ redirect: true }));
  }

  handleSortType(type) {
    this.setState({ sortType: type });
  }

  render() {
    if (!this.state.loaded) return <div>Loading</div>;
    if (this.state.redirect) return <Redirect to='/'/>;

    return (
      <div>
        <div>
          <div>{this.props.question.title}</div>
          <a href='#/questions/ask'>Ask Question</a>
        </div>

        <div>
          <Quill
            readOnly
            modules={{toolbar: null}}
            value={this.props.question.body || ''}/>
          {
            this.props.isAuthor &&
            <div>
              <div>Edit</div>
              <button onClick={this.handleDelete}>Delete</button>
            </div>
          }
          <Author
            highlight='highlight'
            verb='asked'
            authorId={this.props.question.authorId}
            createdAt={this.props.question.createdAt}/>
        </div>

        {
          this.props.answerCount > 0 &&
          <div>
            <div>{this.props.answerCount} Answers</div>
            <div>
              <button onClick={() => this.handleSortType('newest')}>Newest</button>
              <button onClick={() => this.handleSortType('oldest')}>Oldest</button>
              <button onClick={() => this.handleSortType('votes')}>Votes</button>
            </div>
            <AnswersIndex
              sortType={this.state.sortType}
              questionId={this.props.questionId}/>
          </div>
        }

        <AnswerForm questionId={this.props.questionId}/>
      </div>
    );
  }
}
