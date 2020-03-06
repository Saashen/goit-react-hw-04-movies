import React from 'react';
import PropTypes from 'prop-types';
import styles from './Review.module.css';

const Review = ({ author, text }) => (
  <li className={styles.Review}>
    <h3 className={styles.Author}>
      <span className={styles.Label}>Author: </span>
      {author}
    </h3>
    <p>{text}</p>
  </li>
);

Review.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Review;
