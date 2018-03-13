import React from 'react';
import { Link } from 'react-router-dom';
import AnswerFormContainer from '../answers/answer_form_container';

class QuestionShow extends React.Component {
  componentDidMount(){
    this.props.fetchQuestion(this.props.questionId);
  }
// COMPONENT DOES NOT FETCHQUESTION WHEN ENTERING QUESTION/# ON ADDRESS


  render () {
    const answers = this.props.answers.map((answer, idx) => {
      const author = this.props.users[answer.author_id];
      return (
        <div key={idx} className='answer'>
          <div className='answer-body'>{ answer.body }</div>
          <Link
            className='answer-author'
            to={`/users/${author.id}`}>
            { author.name }
          </Link>
        </div>
      );
    });

    return (
      <div className='question-show-page'>

        {
          this.props.question ?
            <div className='question-show'>
              <div className='question-show-header'>
                <div className='question-show-title'>{ this.props.question.title }</div>
                <div className='question-show-header-right'>
                  <Link className='question-show-ask-question' to='/questions/ask' >Ask Question</Link>
                </div>
              </div>
              <div className='question-show-body'>{ this.props.question.body }</div>
              <Link
                className='question-show-author'
                to={`/users/${this.props.question.author_id}`}>
                { this.props.users[this.props.question.author_id].name }
              </Link>
            </div>
          :
            <div>Not Found</div>
        }
        <div className='answer-form'>
          <AnswerFormContainer questionId={ this.props.questionId }/>
        </div>

        <div className='answers'>
          { answers }
        </div>
      </div>
    );
  }
}

export default QuestionShow;


// {
//   Object.keys(this.props.questions).length > 0 &&
//   <div>{this.props.question.title}</div>
// }
//
// {
//   <div>{this.props.question.title ? this.props.question.title : ""}</div>
// }
