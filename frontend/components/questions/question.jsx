import React from 'react';

export default class Question extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchQuestion(this.props.questionId);
  }

  render() {
    return (
      <div>
        questionId: {this.props.questionId}
      </div>
    )
  }
}
