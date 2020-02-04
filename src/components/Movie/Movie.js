import React from 'react';
import PropTypes from 'prop-types';
import styles from './Movie.module.css';

const Movie = ({ movie }) => (
  <>
    <img
      src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
      alt={movie.title}
      className={styles.Image}
    />
    <h2>{movie.title}</h2>
    <p>User score: {movie.vote_average * 10}%</p>
    <h3>Overview</h3>
    <p>{movie.overview}</p>
    <h3>Genres</h3>
    <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
  </>
);

Movie.defaultProps = {
  movie: {},
};

Movie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }),
};

export default Movie;
