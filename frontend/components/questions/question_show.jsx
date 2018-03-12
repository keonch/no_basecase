import React from 'react';
import { Link } from 'react-router-dom';
import AnswerFormContainer from '../answers/answer_form_container.js';

class QuestionShow extends React.Component {
  componentDidMount(){
    this.props.fetchQuestion(this.props.questionId);
  }

  render () {
    return (
      <div className='question-page'>
        {
          Object.keys(this.props.questions).length > 0 ?
          <div className='question'>
            <h1>{ this.props.questions[this.props.questionId].title }</h1>
            <p>{ this.props.questions[this.props.questionId].body }</p>
          </div>
          :
          <div>Not Found</div>
        }
        <AnswerFormContainer />
      </div>
    );
  }
}
// <Link className='user-tag-name' to={`/users/${this.props.author.id}`} >{ this.props.author.name }</Link>

export default QuestionShow;


// {
//   Object.keys(this.props.questions).length > 0 &&
//   <div>{this.props.question.title}</div>
// }
//
// {
//   <div>{this.props.question.title ? this.props.question.title : ""}</div>
// }
