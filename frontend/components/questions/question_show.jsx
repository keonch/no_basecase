import React from 'react';
import { Link } from 'react-router-dom';
import AnswerFormContainer from '../answers/answer_form_container';
// import AnswerContainer from '../answers/answer_container.js';
import QuestionShowItemContainer from './question_show_item_container';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';

class QuestionShow extends React.Component {
  componentDidMount(){
    this.props.fetchQuestion(this.props.questionId);
  }

  renderQuestion(){
    const question = this.props.question;
    const type = 'questions';
    return (
        question ?
        <div className='q-s'>
          <div className='q-s-header'>
            <div className='q-s-title'>{ question.title }</div>
            <Link
              className='q-s-ask-question'
              to='/questions/ask'>
              Ask Question
            </Link>
          </div>

          <QuestionShowItemContainer
            type='question'
            entity={ question }
            questionId={ this.props.questionId }
            />

          <p className='q-s-answer-count'>{ question.answersCount } Answers</p>
        </div>
        :
        <div></div>
    );
  }

  renderAnswers() {
    const type = 'answers';
    const answers = this.props.answers.map((answer, idx) => {
      return (

        <QuestionShowItemContainer
          type='answer'
          entity={ answer }
          questionId={ this.props.questionId }
          key={idx} />
      );
    });

    return (
      answers
    );
  }

  render () {
    return (
      <div className='q-show-page'>
        <div className='q-s-answers-cont'>
          { this.renderQuestion() }
        </div>

        <div className='q-s-answers-cont'>
          { this.renderAnswers() }
        </div>

        <div className='a-form'>
          <AnswerFormContainer questionId={ this.props.questionId }/>
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
