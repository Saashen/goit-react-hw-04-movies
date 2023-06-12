import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Search } from 'react-feather';
import styles from './MoviesSearch.module.css';

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
      <form className={styles.SearchMovie} onSubmit={this.handleSubmit}>
        <input
          className={styles.SearchInput}
          type="text"
          onChange={this.handleChange}
          value={query}
          autoComplete="off"
          placeholder="Search..."
        />
        <button className={styles.SearchButton} type="submit">
          <Search color="white" size={20} />
        </button>
      </form>
    );
  }
}
