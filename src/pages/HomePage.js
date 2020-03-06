import React, { Component } from 'react';
import * as moviesAPI from '../services/moviesApi';

import TrendingMovies from '../components/TrendingMovies/TrendingMovies';

export default class HomePage extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    moviesAPI
      .fetchTrendingMovies()
      .then(({ data }) => this.setState({ items: data.results }))
      .catch(error => console.log(error.message));
  }

  render() {
    const { items } = this.state;
    return <TrendingMovies items={items} />;
  }
}
