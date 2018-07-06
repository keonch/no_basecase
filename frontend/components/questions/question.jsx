import React from 'react';
import Quill from 'react-quill';
import Author from '../users/author_container';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      errors: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchQuestion(this.props.questionId)
    .then(() => (this.setState({loaded: true})));
  }

  render() {
    return (
      <div>
        {
          this.state.loaded &&
          <div>
            <div>{this.props.question.title}</div>
            <Quill
              readOnly
              modules={{toolbar: null}}
              value={this.props.question.body || ''}/>
            <Author
              type='question'
              authorId={this.props.question.authorId}
              createdAt={this.props.question.createdAt}/>
          </div>
        }
      </div>
    );
  }
}
