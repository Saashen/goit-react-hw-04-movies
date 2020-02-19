import React, { Component } from 'react';
import * as moviesAPI from '../services/moviesApi';

import CastCharacter from '../components/CastCharacter/CastCharacter';

const getIdFromProps = props => props.match.params.id;

export default class CastBlock extends Component {
  state = { cast: null };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    moviesAPI
      .fetchMoviesCredits(id)
      .then(({ data }) => this.setState({ cast: data.cast }))
      .catch(error => console.log(error.message));
  }

  render() {
    const { cast } = this.state;

    return (
      cast && (
        <ul>
          {cast.map(person => (
            <li key={person.id}>
              <CastCharacter
                name={person.name}
                character={person.character}
                img={person.profile_path}
              />
            </li>
          ))}
        </ul>
      )
    );
  }
}
