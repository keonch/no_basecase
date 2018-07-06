import React from 'react';
import Quill from 'react-quill';
import Author from '../users/author_container';
import Answer from '../answers/answer_container';
import AnswerForm from '../forms/answer_form_container';
import { Redirect } from 'react-router-dom';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      errors: [],
      redirect: false
    };

    this.renderAnswersIndex = this.renderAnswersIndex.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchQuestion(this.props.questionId)
    .then(() => this.setState({ loaded: true }));
  }

  renderAnswersIndex() {
    return this.props.sortedAnswerIds.map((answerId) => {
      return (
        <Answer
          key={answerId}
          questionId={this.props.questionId}
          answerId={answerId}/>
      );
    });
  }

  handleDelete() {
    this.props.deleteQuestion(this.props.questionId)
    .then(() => this.setState({ redirect: true }));
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
              <div onClick={this.handleDelete}>Delete</div>
            </div>
          }
          <Author
            highlight='highlight'
            verb='asked'
            authorId={this.props.question.authorId}
            createdAt={this.props.question.createdAt}/>
        </div>

        {
          this.props.sortedAnswerIds.length > 0 &&
          <div>{this.props.sortedAnswerIds.length} Answers</div>
        }

        {this.renderAnswersIndex()}

        <AnswerForm questionId={this.props.questionId}/>
      </div>
    );
  }
}
