import React from 'react';

class QuestionShow extends React.Component {
  componentDidMount(){
    this.props.fetchQuestion(this.props.questionId);
  }

  render () {
    return (
      <div className='question-show'>
        {
          Object.keys(this.props.questions).length > 0 ?
          <div>
            <h1>{ this.props.questions[this.props.questionId].title }</h1>
            <p>{ this.props.questions[this.props.questionId].body }</p>
          </div>
          :
          <div>Not Found</div>
        }
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
