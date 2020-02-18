import React, { Component } from 'react';
import * as moviesAPI from '../services/moviesApi';

import Review from '../components/Review/Review';

const getIdFromProps = props => props.match.params.id;

export default class ReviewsBlock extends Component {
  state = { reviews: [] };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    moviesAPI
      .fetchMoviesReviews(id)
      .then(({ data }) => this.setState({ reviews: data.results }))
      .catch(error => console.log(error.message));
  }

  render() {
    const { reviews } = this.state;
    return reviews.length === 0 ? (
      <p>We don&apos;t have any reviews for this movie.</p>
    ) : (
      <ul>
        {reviews.map(review => (
          <Review
            key={review.id}
            author={review.author}
            text={review.content}
          />
        ))}
      </ul>
    );
  }
}
