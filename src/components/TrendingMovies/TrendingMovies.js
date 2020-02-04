import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TrendingMovies = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Link to={`/movies/${item.id}`}>{item.title}</Link>
      </li>
    ))}
  </ul>
);

TrendingMovies.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TrendingMovies;
