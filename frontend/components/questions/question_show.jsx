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
        <div key={idx}>
          <div>{ answer.body }</div>
          <Link
            className='user-tag-name'
            to={`/users/${author.id}`}>
            { author.name }
          </Link>
        </div>
      );
    });

    return (
      <div className='question-page'>

        {
          this.props.question ?
            <div className='question'>
              <div>{ this.props.question.title }</div>
              <div>{ this.props.question.body }</div>
              <Link
                className='user-tag-name'
                to={`/users/${this.props.question.author_id}`}>
                { this.props.users[this.props.question.author_id].name }
              </Link>
            </div>
          :
            <div>Not Found</div>
        }

        {
          <AnswerFormContainer questionId={ this.props.questionId }/>
        }

        { answers }
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
