import React from 'react';
import Quill from 'react-quill';
import { toolbarOptions } from '../../utils/quill_toolbar_options';

export default class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.quillElement = React.createRef();
    this.state = {
      title: '',
      body: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    this.setState({ title: e.currentTarget.value });
  }

  handleBodyChange(value) {
    this.setState({ body: value })
  }

  handleSubmit(e) {
    e.preventDefault();
    // Tuncates the body to 200 characters for rendering snippets
    let quillText = this.quillElement.current.getEditor().getText();
        quillText = quillText.replace(/(\r\n\t|\n|\r\t)/gm, " ");
    this.props.postQuestion({
      title: this.state.title,
      body: this.state.body,
      trunc_body: quillText.substring(0, 200)
    }).then((questionId) => {
      this.props.history.push(`/questions/${questionId}`);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title</label>
        <input
          type='text'
          placeholder="What's your programming question? Be specific."
          className='title'
          value={this.state.title}
          onChange={this.handleTitleChange}/>

        <Quill
          value={this.state.body}
          modules={{ toolbar: toolbarOptions }}
          ref={this.quillElement}
          onChange={this.handleBodyChange}/>

        <input type='submit' value='Post Your Question'/>
      </form>
    );
  }
}
