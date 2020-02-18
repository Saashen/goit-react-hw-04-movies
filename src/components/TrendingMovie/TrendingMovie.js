import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TrendingMovie = ({ id, title }) => (
  <li>
    <Link to={`/movies/${id}`}>{title}</Link>
  </li>
);

TrendingMovie.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default TrendingMovie;
