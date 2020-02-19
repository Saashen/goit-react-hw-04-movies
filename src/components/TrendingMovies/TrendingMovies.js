import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import TrendingMovie from '../TrendingMovie/TrendingMovie';

const TrendingMovies = ({ items, location }) => (
  <ul>
    {items.map(item => (
      <TrendingMovie
        key={item.id}
        id={item.id}
        title={item.title}
        location={location}
      />
    ))}
  </ul>
);

TrendingMovies.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        search: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default withRouter(TrendingMovies);
