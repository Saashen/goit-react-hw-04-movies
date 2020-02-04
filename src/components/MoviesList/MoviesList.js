import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, match, location }) => (
  <ul>
    {movies.map(movie => (
      <li key={movie.id}>
        <Link
          to={{
            pathname: `${match.path}/${movie.id}`,
            state: { from: location },
          }}
        >
          {movie.title}
        </Link>
      </li>
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
      title: PropTypes.string.isRequired,
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
