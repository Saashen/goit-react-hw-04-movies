import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import * as moviesAPI from '../services/moviesApi';

import MoviesSearch from '../components/MoviesSearch/MoviesSearch';
import MoviesList from '../components/MoviesList/MoviesList';
import NoMovies from '../components/NoMovies/NoMovies';
import Loader from '../components/Loader/Loader';

const getQueryFromProps = props =>
  queryString.parse(props.location.search).query;

export default class MoviesPage extends Component {
  state = {
    movies: [],
    isEmpty: false,
    isLoading: false,
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
    this.setState({ isLoading: true });
    moviesAPI
      .fetchMoviesSearch(query)
      .then(({ data }) =>
        this.setState({
          movies: data.results,
          isEmpty: this.checkIsEmpty(data.results),
        }),
      )
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  checkIsEmpty = movies => movies.length === 0 && true;

  render() {
    const { movies, isEmpty, isLoading } = this.state;

    return (
      <>
        <MoviesSearch onSearch={this.handleMoviesSearch} />
        {isLoading && <Loader />}
        {isEmpty ? <NoMovies /> : <MoviesList movies={movies} />}
      </>
    );
  }
}
