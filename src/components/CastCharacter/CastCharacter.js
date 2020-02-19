import React from 'react';
import PropTypes from 'prop-types';
import styles from './CastCharacter.module.css';

import * as moviesAPI from '../../services/moviesApi';

const CastCharacter = ({ name, character, img }) => (
  <li>
    <img src={moviesAPI.castImg + img} alt={name} className={styles.Image} />
    <p>{name}</p>
    <p>Character: {character}</p>
  </li>
);

CastCharacter.defaultProps = {
  character: '',
};

CastCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string,
  img: PropTypes.string.isRequired,
};

export default CastCharacter;
