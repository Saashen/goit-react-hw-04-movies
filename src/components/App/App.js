import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Loader from '../Loader/Loader';

import NotFoundPage from '../../pages/NotFoundPage';

const AsyncHome = lazy(() =>
  import('../../pages/HomePage' /* webpackChunkName: "home-page" */),
);

const AsyncMovies = lazy(() =>
  import('../../pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);

const AsyncMovie = lazy(() =>
  import('../../pages/MoviePage' /* webpackChunkName: "movie-page" */),
);

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Nav />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact component={AsyncHome} />
            <Route path="/movies/:id" component={AsyncMovie} />
            <Route path="/movies" component={AsyncMovies} />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}
