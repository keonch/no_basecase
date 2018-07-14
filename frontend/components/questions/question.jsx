import React from 'react';
import Quill from 'react-quill';
import Author from '../users/author';
import AnswersIndex from '../answers/answers_index_container';
import AnswerForm from '../forms/answer_form_container';
import Sidebar from '../sidebar';
import { ClipLoader } from 'react-spinners';
import { Link, Redirect } from 'react-router-dom';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
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
    .then(() => this.props.history.push('/'));
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
    if (!this.state.loaded) {
      return (
        <div className='loader'>
          <ClipLoader
            color={'#F48024'}
            loading
            size={35}
          />
        </div>
      );
    }

    return (
      <div className='question-show-page'>
        <header>
          <h1>{this.props.question.title}</h1>
          <Link
            className='ask-question-2'
            to='/questions/ask'>Ask Question</Link>
        </header>

        <Sidebar/>

        <div className='question show-item'>
          <div className='show-votes'>
            <i onClick={() => this.handleVote('up')} className='upvote fas fa-caret-up'/>
            <div className='answer-count'>{this.props.question.votes}</div>
            <i onClick={() => this.handleVote('down')} className='downvote fas fa-caret-down'/>
          </div>
          <Quill
            className='show-body'
            readOnly
            modules={{toolbar: null}}
            value={this.props.question.body || ''}/>
          <div className='show-info'>
            {
              !!this.props.author &&
              <Author
                highlight='highlight'
                verb='asked'
                showAvatar
                author={this.props.author}
                createdAt={this.props.question.createdAt}/>
            }
            {
              this.props.isAuthor &&
              <div className='author-actions'>
                <Link
                  className='author-action'
                  to={`/questions/${this.props.questionId}/edit`}>
                  edit
                </Link>
                <button
                  className='author-action'
                  onClick={this.handleDelete}>
                  delete
                </button>
              </div>
            }
          </div>
        </div>

        {
          this.props.answerCount > 0 &&
          <div className='answers'>
            <header>
              <h2>{this.props.answerCount} Answer{`${this.props.answerCount > 1 ? 's' : ''}`}</h2>
              <div className='tabs'>
                <button onClick={() => this.props.sortAnswersBy('newest')}>newest</button>
                <button onClick={() => this.props.sortAnswersBy('oldest')}>oldest</button>
                <button onClick={() => this.props.sortAnswersBy('votes')}>votes</button>
              </div>
            </header>
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
