import React from 'react';
import Quill from 'react-quill';
import { Link, Redirect } from 'react-router-dom';
import { toolbarOptions } from '../../utils/quill_toolbar_options';

export default class AnswerEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.quillElement = React.createRef();
    this.state = {
      title: props.question.title,
      body: props.question.body,
      loaded: props.loaded,
      redirect: false
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (!this.state.loaded) {
      this.props.fetchQuestion(this.props.questionId)
      .then(() => this.setState({
        body: this.props.question.body,
        loaded: true
      }));
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.question.authorId !== props.currentUser.id) {
      return { redirect: true };
    }
    return null;
  }

  handleTitleChange(e) {
    this.setState({ title: e.currentTarget.value });
  }

  handleBodyChange(value) {
    this.setState({ body: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Tuncates the body to 200 characters for rendering snippets
    let quillText = this.quillElement.current.getEditor().getText();
        quillText = quillText.replace(/(\r\n\t|\n|\r\t)/gm, " ");
    this.props.updateQuestion(
      this.props.questionId,
      {
        title: this.state.title,
        body: this.state.body,
        trunc_body: quillText.substring(0, 200)
      }
    ).then(() => this.setState({ redirect: true }));
  }

  render() {
    if (!this.state.loaded) {
      return <div></div>;
    } else if (this.state.redirect) {
      return <Redirect to={`/questions/${this.props.questionId}`}/>;
    }

    return (
      <form
        className='question-edit-form'
        onSubmit={this.handleSubmit}>
        <div className='title'>
          <label>Title</label>
          <input
            type='text'
            value={this.state.title}
            onChange={this.handleTitleChange}/>
        </div>

        <Quill
          value={this.state.body}
          modules={{ toolbar: toolbarOptions }}
          ref={this.quillElement}
          onChange={this.handleBodyChange}/>
        <input type='submit' value='Edit Question'/>
        <Link to={`/questions/${this.props.questionId}`}>Discard</Link>
      </form>
    );
  }
}
