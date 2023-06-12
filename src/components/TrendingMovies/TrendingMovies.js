/* eslint-disable react/prop-types */
import React from 'react';
// import Slider from 'react-slick';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './TrendingMovies.module.css';
import TrendingMovie from '../TrendingMovie/TrendingMovie';

const TrendingMovies = ({ items, location }) => {
  // const settings = {
  //   centerMode: true,
  //   slidesToShow: 3,
  //   dots: true,
  //   infinite: true,
  //   className: 'center',
  // };

  return (
    <>
      <h2 className={styles.Header}>Trending today</h2>
      {/* <Slider {...settings}>
        {items.map(item => (
          <TrendingMovie
            key={item.id}
            id={item.id}
            title={item.title}
            location={location}
            image={item.poster_path}
          />
        ))}
      </Slider> */}

      <ul className={styles.MoviesList}>
        {items.map(item => (
          <TrendingMovie
            key={item.id}
            id={item.id}
            title={item.title}
            location={location}
            image={item.poster_path}
          />
        ))}
      </ul>
    </>
  );
};

TrendingMovies.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        search: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default withRouter(TrendingMovies);
