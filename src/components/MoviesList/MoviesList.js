import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';

import MovieFromList from '../MovieFromList/MovieFromList';

const MoviesList = ({ movies, match, location }) => (
  <ul className={styles.MoviesList}>
    {movies.map(movie => (
      <MovieFromList
        key={movie.id}
        id={movie.id}
        matchPath={match.path}
        location={location}
        title={movie.title}
        image={movie.poster_path}
      />
    ))}
  </ul>
);

MoviesList.defaultProps = {
  movies: [],
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        search: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default withRouter(MoviesList);
