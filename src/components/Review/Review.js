import React from 'react';
import PropTypes from 'prop-types';

const Review = ({ author, text }) => (
  <li>
    <h3>Author: {author}</h3>
    <p>{text}</p>
  </li>
);

Review.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Review;
