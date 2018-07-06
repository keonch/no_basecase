import React from 'react';
import Quill from 'react-quill';
import Author from '../users/author_container';
import Answer from '../answers/answer_container';
import AnswerForm from '../forms/answer_form_container';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      errors: []
    };

    this.renderAnswersIndex = this.renderAnswersIndex.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchQuestion(this.props.questionId)
    .then(() => (this.setState({loaded: true})));
  }

  renderAnswersIndex() {
    return this.props.sortedAnswerIds.map((answerId) => {
      return (
        <Answer
          key={answerId}
          answerId={answerId}/>
      );
    });
  }

  render() {
    if (!this.state.loaded) return <div>Loading</div>;

    return (
      <div>
        <div>
          <div>{this.props.question.title}</div>
          <a href='#/questions/ask'>Ask Question</a>
        </div>

        <div>
          <Quill
            readOnly
            modules={{toolbar: null}}
            value={this.props.question.body || ''}/>
          {
            this.props.isAuthor &&
            <div>
              <div>Edit</div>
              <div>Delete</div>
            </div>
          }
          <Author
            highlight='highlight'
            verb='asked'
            authorId={this.props.question.authorId}
            createdAt={this.props.question.createdAt}/>
        </div>

        {
          this.props.sortedAnswerIds.length > 0 &&
          <div>{this.props.sortedAnswerIds.length} Answers</div>
        }

        {this.renderAnswersIndex()}

        <AnswerForm questionId={this.props.questionId}/>

      </div>
    );
  }
}
