import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reviews.module.css';
import Review from '../Review/Review';

const Reviews = ({ reviews }) => (
  <ul className={styles.Reviews}>
    {reviews.map(review => (
      <Review key={review.id} author={review.author} text={review.content} />
    ))}
  </ul>
);

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Reviews;
