import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import * as moviesAPI from '../services/moviesApi';

import MoviesSearch from '../components/MoviesSearch/MoviesSearch';
import MoviesList from '../components/MoviesList/MoviesList';

const getQueryFromProps = props =>
  queryString.parse(props.location.search).query;

export default class MoviesPage extends Component {
  state = {
    movies: [],
  };

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const query = getQueryFromProps(this.props);

    if (query) {
      this.loadMovies(query);
    }
  }

  componentDidUpdate(prevProps) {
    const prevQuery = getQueryFromProps(prevProps);
    const nextQuery = getQueryFromProps(this.props);

    if (prevQuery !== nextQuery) {
      this.loadMovies(nextQuery);
    }
  }

  handleMoviesSearch = query => {
    const { history, location } = this.props;

    this.setState({ movies: [] });
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  loadMovies = query => {
    moviesAPI
      .fetchMoviesSearch(query)
      .then(({ data }) => this.setState({ movies: data.results }))
      .catch(error => console.log(error));
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <MoviesSearch onSearch={this.handleMoviesSearch} />
        {movies.length > 0 && <MoviesList movies={movies} />}
      </>
    );
  }
}
