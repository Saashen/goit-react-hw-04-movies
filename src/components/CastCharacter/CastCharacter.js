import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-feather';

import styles from './CastCharacter.module.css';
import * as moviesAPI from '../../services/moviesApi';

const CastCharacter = ({ name, character, img }) => (
  <li className={styles.Character}>
    {img ? (
      <img src={moviesAPI.castImg + img} alt={name} className={styles.Image} />
    ) : (
      <div className={styles.NoImage}>
        <Image color="#202020" size={35} />
      </div>
    )}
    <span className={styles.CharacterSpan}>{name}</span>
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
