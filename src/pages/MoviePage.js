import React, { Component, lazy, Suspense } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Services
import * as moviesAPI from '../services/moviesApi';

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
const getUrlFromProps = props => props.match.url;

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
    const url = getUrlFromProps(this.props);
    const { movie } = this.state;
    const { location } = this.props;
    const locationToGet = location.state.from;

    return (
      <>
        <button type="button" onClick={this.handleReturn}>
          Go back
        </button>
        {movie && <Movie movie={movie} onReturn={this.handleReturn} />}
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link
                to={{
                  pathname: `${url}/cast`,
                  state: { from: locationToGet },
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: locationToGet },
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={`${path}/cast`} component={AsyncCast} />
            <Route path={`${path}/reviews`} component={AsyncReviews} />
          </Switch>
        </Suspense>
      </>
    );
  }
}
