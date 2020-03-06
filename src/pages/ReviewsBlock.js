import React, { Component } from 'react';
import * as moviesAPI from '../services/moviesApi';

import NoReviews from '../components/NoReviews/NoReviews';
import Reviews from '../components/Reviews/Reviews';

const getIdFromProps = props => props.match.params.id;

export default class ReviewsBlock extends Component {
  state = { reviews: [] };

  async componentDidMount() {
    const id = getIdFromProps(this.props);
    await moviesAPI
      .fetchMoviesReviews(id)
      .then(({ data }) => this.setState({ reviews: data.results }))
      .catch(error => console.log(error.message));

    window.scrollTo({
      top: 500,
      behavior: 'smooth',
    });
  }

  render() {
    const { reviews } = this.state;
    return reviews.length === 0 ? <NoReviews /> : <Reviews reviews={reviews} />;
  }
}
