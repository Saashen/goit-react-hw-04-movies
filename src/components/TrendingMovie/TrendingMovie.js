import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MOVIES } from '../../services/router';

const TrendingMovie = ({ id, title, location }) => (
  <li>
    <Link
      to={{
        pathname: `${MOVIES}/${id}`,
        state: { from: location },
      }}
    >
      {title}
    </Link>
  </li>
);

TrendingMovie.propTypes = {
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
