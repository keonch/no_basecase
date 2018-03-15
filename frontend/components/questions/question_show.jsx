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

  deleteAndRedirect(entity, history){
    if (entity.title) {
      this.props.deleteQuestion(entity.id)
      .then(() => {
        return (
          history.push(`/questions`)
        );
      });
    } else {
      this.props.deleteAnswer(this.props.questionId, entity.id);

      // .then((payload) => {
      //   return (
      //     history.push(`/questions/${payload.questionId}`)
      //   );
      // });
    }
  }

  renderDelete(entity) {
    const currentUser = this.props.currentUser || { id: null };
    let isOwner = false;
    if (entity) {
      isOwner = (currentUser.id === entity.author_id);
    }
    return (
      isOwner ?
      <div className='user-buttons'>
        <button
          className='user-buttons-edit'
          onClick={() => this.redirectEdit()}>
          Edit
        </button>

        <button
          className='user-buttons-delete'
          onClick={ () => this.deleteAndRedirect(entity, this.props.history) }>
          Delete
        </button>
      </div>
      :
        null
    );
  }

  renderQuestion(){
    const question = this.props.question;
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

          { this.renderContent(question) }

        </div>
        :
        <div>Question Not Found</div>
    );
  }

  renderContent(entity, idx) {
    return (
      <div className='q-s-content'>
        <div className='q-s-votes'>
          <button className="q-upvote"><i className="fas fa-caret-up"></i></button>
          <p className='q-s-votes-number'>{ entity.votes }</p>
          <button className="q-downvote"><i className="fas fa-caret-down"></i></button>
        </div>

        <div className='q-s-body'>
          <ReactQuill
            value={ entity.body }
            readOnly
            modules={ {toolbar: null} } />
        </div>

        { this.renderDelete(entity) }

        <UserTag
          className='q-author'
          contentType={`${entity}`}
          author={ this.props.users[entity.author_id] }
          time={ entity.created_at } />
      </div>
    );
  }

  renderAnswers() {
    const answers = this.props.answers.map((answer, idx) => {
      // const author = this.props.users[answer.author_id];
      return (
        this.renderContent(answer)
      );
    });

    return (
      answers
    );
  }

  render () {
    return (
      <div className='q-show-page'>
        <div>
          { this.renderQuestion() }
        </div>

        <div>
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
