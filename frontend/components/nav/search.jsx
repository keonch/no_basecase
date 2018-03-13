import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.SearchButton = this.SearchButton.bind(this);
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

  SearchButton() {
    if (this.props.selected) {
      return (
        <button type='submit' className='search-button'><i className="fas fa-search"></i></button>
      );
    } else {
      return (
        <div></div>
      );
    }
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
        <this.SearchButton />
      </form>
    );
  }
}

export default Search;


// {
//   seach ?
//   :
//   ""
// }
// on blur
// transitions
