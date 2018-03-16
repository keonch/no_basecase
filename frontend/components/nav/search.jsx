import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.SearchButton = this.SearchButton.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e){
    this.setState({ searchText: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchText = Object.assign({}, this.state);
    this.props.history.push(`/questions/search/${this.state.searchText.replace(/[ ]/g, '-')}`);
    this.props.searchForQuestion(searchText);
    // .then((payload) => {
    //   return (
    //
    //   );
    // });
  }

  SearchButton() {
    if (this.props.selected) {
      return (
        <button
          className='search-button'
          onClick={ this.handleSubmit }>
          <i className="fas fa-search"></i>
        </button>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='search-form'
        onClick={() => this.props.selectSearchBar()}
        onBlur={() => this.props.unselectSearchBar()}>
        <input
          className='search'
          type='text'
          placeholder='Search...'
          onChange={ this.updateSearch }
          />
        <this.SearchButton />
      </form>
    );
  }
}

export default withRouter(Search);


// {
//   seach ?
//   :
//   ""
// }
// on blur
// transitions
