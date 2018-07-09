import React from 'react';
import Quill from 'react-quill';
import Author from '../users/author';
import AnswersIndex from '../answers/answers_index_container';
import AnswerForm from '../forms/answer_form_container';
import { Link, Redirect } from 'react-router-dom';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      redirect: false,
      sortType: 'votes'
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleVote = this.handleVote.bind(this);
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

  handleVote(direction) {
    if (direction === 'up') {
      this.props.upvoteQuestion(this.props.questionId);
    } else {
      this.props.downvoteQuestion(this.props.questionId);
    }
  }

  render() {
    if (!this.state.loaded) return <div>Loading</div>;
    if (this.state.redirect) return <Redirect to='/'/>;

    return (
      <div>
        <div>
          <div>{this.props.question.title}</div>
          <Link to='/questions/ask'>Ask Question</Link>
        </div>

        <div>
          <i onClick={() => this.handleVote('up')} className='upvote fas fa-caret-up'/>
          <div>{this.props.question.votes}</div>
          <i onClick={() => this.handleVote('down')} className='downvote fas fa-caret-down'/>
          <Quill
            readOnly
            modules={{toolbar: null}}
            value={this.props.question.body || ''}/>
          {
            this.props.isAuthor &&
            <div>
              <Link to={`/questions/${this.props.questionId}/edit`}>
                Edit
              </Link>
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
