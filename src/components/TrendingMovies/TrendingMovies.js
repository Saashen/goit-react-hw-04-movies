import React from 'react';
import PropTypes from 'prop-types';

import TrendingMovie from '../TrendingMovie/TrendingMovie';

const TrendingMovies = ({ items }) => (
  <ul>
    {items.map(item => (
      <TrendingMovie key={item.id} id={item.id} title={item.title} />
    ))}
  </ul>
);

TrendingMovies.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default TrendingMovies;
