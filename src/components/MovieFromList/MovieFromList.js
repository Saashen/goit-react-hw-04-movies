import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Image } from 'react-feather';

import styles from './MovieFromList.module.css';
import * as moviesAPI from '../../services/moviesApi';

const MovieFromList = ({ id, matchPath, location, title, image }) => (
  <li>
    <Link
      className={styles.Movie}
      to={{
        pathname: `${matchPath}/${id}`,
        state: { from: location },
      }}
    >
      {image ? (
        <img
          src={moviesAPI.movieImg + image}
          alt={title}
          className={styles.Poster}
        />
      ) : (
        <div className={styles.NoImage}>
          <Image color="#202020" size={60} />
        </div>
      )}
      <div className={styles.HoverBlock}>
        <p className={styles.HoverTitle}>{title}</p>
      </div>
      {image === null && (
        <div className={styles.HoverBlockMedia}>
          <p className={styles.HoverTitleMedia}>{title}</p>
        </div>
      )}
    </Link>
  </li>
);

MovieFromList.defaultProps = {
  image: null,
};

MovieFromList.propTypes = {
  image: PropTypes.string,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  matchPath: PropTypes.string.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        search: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default MovieFromList;
