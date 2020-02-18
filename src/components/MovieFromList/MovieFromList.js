import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieFromList = ({ id, matchPath, location, title }) => (
  <li>
    <Link
      to={{
        pathname: `${matchPath}/${id}`,
        state: { from: location },
      }}
    >
      {title}
    </Link>
  </li>
);

MovieFromList.propTypes = {
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
