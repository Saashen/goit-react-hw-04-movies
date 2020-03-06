import React, { Component } from 'react';
import * as moviesAPI from '../services/moviesApi';

import CastList from '../components/CastList/CastList';

const getIdFromProps = props => props.match.params.id;

export default class CastBlock extends Component {
  state = { cast: null, error: null };

  async componentDidMount() {
    const id = getIdFromProps(this.props);

    await moviesAPI
      .fetchMoviesCredits(id)
      .then(({ data }) => this.setState({ cast: data.cast }))
      .catch(error => this.setState({ error: error.message }));

    window.scrollTo({
      top: 500,
      behavior: 'smooth',
    });
  }

  render() {
    const { cast, error } = this.state;

    return (
      <>
        {error && <h1>{error}</h1>}
        {cast && <CastList id="cast" cast={cast} />}
      </>
    );
  }
}
