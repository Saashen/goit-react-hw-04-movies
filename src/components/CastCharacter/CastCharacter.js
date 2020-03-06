import React from 'react';
import PropTypes from 'prop-types';
import styles from './CastCharacter.module.css';

import * as moviesAPI from '../../services/moviesApi';

const noImage = require('../../img/no-image.jpg');

const CastCharacter = ({ name, character, img }) => (
  <li className={styles.Character}>
    <img
      src={img !== null ? moviesAPI.castImg + img : noImage}
      alt={name}
      className={styles.Image}
    />
    <span className={styles.Naming}>{name}</span>
    <span className={styles.CharacterSpan}>Character:</span>
    <span className={styles.Naming}>{character}</span>
  </li>
);

CastCharacter.defaultProps = {
  character: '',
  img: null,
};

CastCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string,
  img: PropTypes.string,
};

export default CastCharacter;
