/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import * as basicLightbox from 'basiclightbox';

import styles from './Movie.module.css';
import 'basiclightbox/dist/basicLightbox.min.css';
import * as moviesAPI from '../../services/moviesApi';
import { CAST, REVIEWS } from '../../services/router';

const noImage = require('../../img/no-image.jpg');

const Movie = ({ movie, onReturn, location, match }) => {
  let locationToGet = null;
  if (location.state) {
    locationToGet = location.state.from;
  }

  const instance = basicLightbox.create(`
    <img src=${movie.poster_path !== null &&
      moviesAPI.movieImg + movie.poster_path}>
`);

  const isExactCastPath = () =>
    location.pathname !== `/movies/${movie.id}/cast`
      ? match.url + CAST
      : match.url;
  const isExactReviewsPath = () =>
    location.pathname !== `/movies/${movie.id}/reviews`
      ? match.url + REVIEWS
      : match.url;

  return (
    <div className={styles.Movie}>
      <div className={styles.ImageContainer}>
        <img
          src={
            movie.poster_path !== null
              ? moviesAPI.movieImg + movie.poster_path
              : noImage
          }
          alt={movie.title}
          className={styles.Image}
          onClick={instance.show}
        />
      </div>

      <div className={styles.MovieInfo}>
        <ul className={styles.Description}>
          <li className={styles.Title}>{movie.title}</li>
          <li className={styles.DescriptionPoint}>
            <span className={styles.Bold}>User score: </span>
            {movie.vote_average * 10}%
          </li>
          <li className={styles.DescriptionPoint}>
            <span className={styles.Bold}>Genres: </span>
            {movie.genres.map(genre => genre.name).join(', ')}
          </li>
          <li className={styles.DescriptionPoint}>
            <span className={styles.Bold}>Overview: </span>
            {movie.overview}
          </li>
        </ul>

        <div className={styles.Additional}>
          <ul className={styles.CastReviewsLinks}>
            <li className={styles.AddInfo}>Additional information:</li>
            <li>
              <Link
                className={styles.Link}
                to={{
                  pathname: isExactCastPath(),
                  state: { from: locationToGet },
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                replace
                className={styles.Link}
                to={{
                  pathname: isExactReviewsPath(),
                  state: { from: locationToGet },
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>
          <button className={styles.Button} type="button" onClick={onReturn}>
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

Movie.defaultProps = {
  movie: PropTypes.shape({
    poster_path: null,
  }),
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }),
  onReturn: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.shape({
      from: PropTypes.shape({
        search: PropTypes.string,
      }),
    }),
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Movie);
