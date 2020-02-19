import React, { Component } from 'react';
import * as moviesAPI from '../services/moviesApi';

import CastCharacter from '../components/CastCharacter/CastCharacter';

const getIdFromProps = props => props.match.params.id;

export default class CastBlock extends Component {
  state = { cast: null, error: null };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    moviesAPI
      .fetchMoviesCredits(id)
      .then(({ data }) => this.setState({ cast: data.cast }))
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    const { cast, error } = this.state;

    return (
      <>
        {error && <h1>{error}</h1>}
        {cast && (
          <ul>
            {cast.map(person => (
              <CastCharacter
                key={person.id}
                name={person.name}
                character={person.character}
                img={person.profile_path}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}
