import React from 'react';
import QuestionIndexItem from './questions_index_item_container';
import Sidebar from '../sidebar';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

export default class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'top',
      loaded: false
    };

    this.renderQuestions = this.renderQuestions.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchAllQuestions()
    .then(() => this.setState({ loaded: true }));
  }

  renderQuestions() {
    return (
      this.props.sortedQuestionIds.map((questionId) => {
        return (
          <QuestionIndexItem
            key={questionId}
            page={this.props.page}
            question={this.props.questions[questionId]}/>
        );
      })
    );
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
      <div className='index-page'>
        <div className='index-header'>
          <header>{
            this.props.page === '/' ? 'Top Questions' : 'All Questions'
          }</header>
          <Link className='ask-question' to='questions/ask'>Ask Question</Link>
        </div>

        <Sidebar/>

        <div className='index-sub-header'>
          <div className='question-counter'>{
            this.props.page === '/questions' &&
            `${this.props.sortedQuestionIds.length} questions`
          }</div>
          <div className='sort-tabs'>
            <button className='sort-tab'>Newest</button>
            <button className='sort-tab'>Votes</button>
            <button className='sort-tab'>Active</button>
            <button className='sort-tab'>Unanswered</button>
          </div>
        </div>

        <ul className='questions-index'>{this.renderQuestions()}</ul>
      </div>
    );
  }
}
