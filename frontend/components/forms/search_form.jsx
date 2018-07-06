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
  }

  toggleSearchIcon() {
    this.setState({ searchIcon: !this.state.searchIcon });
  }

  handleChange(e) {
    this.setState({ searchText: e.currentTarget.value });
  }

  render() {
    return (
      <div className='search'>
        <input
          type='text'
          placeholder='Search...'
          className='search-input'
          onChange={this.handleChange}
          onFocus={this.toggleSearchIcon}
          onBlur={this.toggleSearchIcon}
          value={this.state.searchText}/>
          {
            this.state.searchIcon &&
            <i className='search-icon fas fa-search'/>
          }
      </div>
    );
  }
}
