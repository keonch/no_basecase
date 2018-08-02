import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchIcon: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.toggleSearchIcon = this.toggleSearchIcon.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleSearchIcon() {
    this.setState({ searchIcon: !this.state.searchIcon });
  }

  handleChange(e) {
    this.setState({ searchText: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.search(this.state.searchText);
  }

  render() {
    return (
      <form
        onFocus={this.toggleSearchIcon}
        onBlur={this.toggleSearchIcon}
        onSubmit={this.handleSubmit}
        className='search'>
        <input
          type='text'
          placeholder='Search...'
          className='search-input'
          onChange={this.handleChange}
          value={this.state.searchText}/>
      </form>
    );
  }
}

// {
//   this.state.searchIcon &&
//   <i
//     onClick={this.handleSubmit}
//     className='search-icon fas fa-search'/>
// }
