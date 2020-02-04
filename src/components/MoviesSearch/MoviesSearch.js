import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MoviesSearch extends Component {
  state = { query: '' };

  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={query}
          autoComplete="off"
          placeholder="Search..."
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
