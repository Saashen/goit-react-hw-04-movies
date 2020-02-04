import React from 'react';
import PropTypes from 'prop-types';
import styles from './CastCharacter.module.css';

const CastCharacter = ({ name, character, img }) => (
  <>
    <img
      src={`https://image.tmdb.org/t/p/w1280/${img}`}
      alt={name}
      className={styles.Image}
    />
    <p>{name}</p>
    <p>Character: {character}</p>
  </>
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
