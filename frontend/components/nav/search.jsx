import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateSearch(e){
    this.setState({ searchText: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchText = Object.assign({}, this.state);
    this.props.searchForQuestion(searchText).then((payload) => {
      return (
        this.props.history.push('/questions')
      );
    });
  }

  render() {
    return (
      <form onSubmit={() => this.handleSubmit(e)}>
        <input
          className='search'
          type='text'
          placeholder='Search...'
          onChange={ this.updateSearch }
          onClick={() => this.props.selectSearchBar()}
          onBlur={() => this.props.unselectSearchBar()}
          />
        <button type='submit' className='search-icon'><i className="fas fa-search"></i></button>
      </form>
    );
  }
}

export default Search;
// on blur
// transitions
