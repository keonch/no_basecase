import React from 'react';
import { Link } from 'react-router-dom';

class QuestionsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='question-item'>
        <div className='question-stats'>
          <p>Vote#</p>
          <p>answer#</p>
        </div>
        <div className='question-summary'>
          <Link className='question-title' to={`/questions/${this.props.question.id}`}>{this.props.question.title}</Link>
          <div className='question-body-trunk'>{this.props.question.body}</div>
          {
            this.props.isOwner ?
              <button
                className="delete-button"
                onClick={() => this.props.deleteQuestion(this.props.question.id)}
                value="Delete">DELETE</button>
            :
              ""
          }
          <Link className='user-tag-name' to={`/users/${this.props.author.id}`} >{ this.props.author.name }</Link>
        </div>
      </div>
    );
  }
}

export default QuestionsIndexItem;
