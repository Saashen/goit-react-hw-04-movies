/* eslint-disable import/no-cycle */
import { lazy } from 'react';

const AsyncHome = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */),
);

const AsyncMovies = lazy(() =>
  import('../pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);

const AsyncMovie = lazy(() =>
  import('../pages/MoviePage' /* webpackChunkName: "movie-page" */),
);

export const MOVIES = '/movies';
export const CAST = '/cast';
export const REVIEWS = '/reviews';

export const routes = [
  {
    name: 'HomePage',
    path: '/',
    component: AsyncHome,
    exact: true,
  },
  {
    name: 'MoviePage',
    path: `${MOVIES}/:id`,
    component: AsyncMovie,
  },
  {
    name: 'MoviesPage',
    path: MOVIES,
    component: AsyncMovies,
  },
];
