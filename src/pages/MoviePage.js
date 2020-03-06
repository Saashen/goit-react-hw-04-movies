import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Services
import * as moviesAPI from '../services/moviesApi';
import { CAST, REVIEWS } from '../services/router';

// Components
import Loader from '../components/Loader/Loader';
import Movie from '../components/Movie/Movie';

const AsyncCast = lazy(() =>
  import('./CastBlock' /* webpackChunkName: "cast-block" */),
);

const AsyncReviews = lazy(() =>
  import('./ReviewsBlock' /* webpackChunkName: "reviews-block" */),
);

const getIdFromProps = props => props.match.params.id;
const getPathFromProps = props => props.match.path;

export default class MoviePage extends Component {
  state = { movie: null };

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.shape({
          search: PropTypes.string,
        }),
      }),
    }).isRequired,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    moviesAPI
      .fetchMoviesDetails(id)
      .then(({ data }) => this.setState({ movie: data }))
      .catch(error => console.log(error.message));
  }

  handleReturn = () => {
    const { history, location } = this.props;

    if (location.state) {
      return history.push(location.state.from);
    }
    return history.push('/');
  };

  render() {
    const path = getPathFromProps(this.props);
    const { movie } = this.state;

    return (
      <>
        {movie && (
          <Movie id="movie" movie={movie} onReturn={this.handleReturn} />
        )}
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={path + CAST} component={AsyncCast} />
            <Route path={path + REVIEWS} component={AsyncReviews} />
          </Switch>
        </Suspense>
      </>
    );
  }
}
