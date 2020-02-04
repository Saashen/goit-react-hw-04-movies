import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'api_key=d837650e38cd3d8ec3d800ea1a83851c';

export const fetchTrendingMovies = () =>
  axios.get(`${BASE_URL}movie/popular?${KEY}&language=en-US&page=1`);
export const fetchMoviesSearch = search =>
  axios.get(
    `${BASE_URL}search/movie?query=${search}&${KEY}&language=en-US&page=1`,
  );
export const fetchMoviesDetails = id =>
  axios.get(`${BASE_URL}movie/${id}?${KEY}&language=en-US`);
export const fetchMoviesCredits = id =>
  axios.get(`${BASE_URL}movie/${id}/credits?${KEY}&page=1`);
export const fetchMoviesReviews = id =>
  axios.get(`${BASE_URL}movie/${id}/reviews?${KEY}&language=en-US&page=1`);
