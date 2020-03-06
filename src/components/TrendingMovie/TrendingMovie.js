import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MOVIES } from '../../services/router';
import * as moviesAPI from '../../services/moviesApi';
import styles from './TrendingMovie.module.css';

const noImage = require('../../img/no-image.jpg');

const TrendingMovie = ({ id, title, location, image }) => (
  <li>
    <Link
      className={styles.TrendingMovie}
      to={{
        pathname: `${MOVIES}/${id}`,
        state: { from: location },
      }}
    >
      <img
        src={image !== null ? moviesAPI.movieImg + image : noImage}
        alt={title}
        className={image !== null ? styles.Poster : styles.NoImage}
      />
      <div className={styles.HoverBlock}>
        <p className={styles.HoverTitle}>{title}</p>
      </div>
    </Link>
  </li>
);

TrendingMovie.defaultProps = {
  image: null,
};

TrendingMovie.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        search: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default TrendingMovie;
