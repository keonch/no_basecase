import React from 'react';
import { Link } from 'react-router-dom';
import AnswerFormContainer from '../answers/answer_form_container';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
import UserTag from '../users/user_tag';
import AnswerContainer from '../answers/answer_container.js';

class QuestionShow extends React.Component {
  componentDidMount(){
    this.props.fetchQuestion(this.props.questionId);
  }

  renderQuestion(){
    return (
        this.props.question ?
        <div className='q-s'>
          <div className='q-s-header'>
            <div className='q-s-title'>{ this.props.question.title }</div>
            <Link
              className='q-s-ask-question'
              to='/questions/ask'>
              Ask Question
            </Link>
          </div>

          <div className='q-answer-form'>
            <ReactQuill
              value={ this.props.question.body }
              readOnly
              modules={ {toolbar: null} }
               />
          </div>

          <UserTag
            className='q-author'
            contentType='question'
            author={ this.props.users[this.props.question.author_id] }
            time={ this.props.question.created_at } />
        </div>
        :
        <div>Question Not Found</div>
    );
  }

  renderAnswers() {
    const answers = this.props.answers.map((answer, idx) => {
      const author = this.props.users[answer.author_id];

      return (
        <AnswerContainer
          className='a'
          key={idx}
          answer={answer}
          author={author} />
      );
    });

    return (
      answers
    );
  }

  render () {
    return (
      <div className='q-show-page'>
        { this.renderQuestion() }

        <div className='a-form'>
          <AnswerFormContainer questionId={ this.props.questionId }/>
        </div>

        <div className='answers'>
          { this.renderAnswers() }
        </div>
      </div>
    );
  }

  componentWillUnmount(){
    this.props.clearQuestions();
  }
}

export default QuestionShow;


// <div className='question-show-body'>{ this.props.question.body }</div>
// {
//   Object.keys(this.props.questions).length > 0 &&
//   <div>{this.props.question.title}</div>
// }
//
// {
//   <div>{this.props.question.title ? this.props.question.title : ""}</div>
// }
