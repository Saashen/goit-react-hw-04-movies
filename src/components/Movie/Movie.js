/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
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
      <div>
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
            {movie.vote_average.toFixed(2)} / 10
          </li>
          <li className={styles.DescriptionPoint}>
            <span className={styles.Bold}>Release Date: </span>
            {movie.release_date.replaceAll('-', ' / ')}
          </li>
          <li className={styles.DescriptionPoint}>
            <span className={styles.Bold}>Genres: </span>
            {movie.genres.map(genre => genre.name).join(', ')}
          </li>
          <li className={styles.DescriptionPoint}>
            <span className={styles.Bold}>Countries: </span>
            {movie.production_countries.map(country => country.name).join(', ')}
          </li>
          <li className={styles.DescriptionPoint}>
            <span className={styles.Bold}>Tagline: </span>
            {movie.tagline}
          </li>
          <li className={styles.DescriptionPoint}>
            <span className={styles.Bold}>Overview: </span>
            {movie.overview}
          </li>
        </ul>

        <div className={styles.Additional}>
          <ul className={styles.CastReviewsLinks}>
            <li>
              <NavLink
                className={styles.Link}
                activeClassName={styles.ActiveLink}
                to={{
                  pathname: isExactCastPath(),
                  state: { from: locationToGet },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                replace
                className={styles.Link}
                activeClassName={styles.ActiveLink}
                to={{
                  pathname: isExactReviewsPath(),
                  state: { from: locationToGet },
                }}
              >
                Reviews
              </NavLink>
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
    release_date: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    production_countries: PropTypes.arrayOf(
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
