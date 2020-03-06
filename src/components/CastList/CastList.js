import React from 'react';
import PropTypes from 'prop-types';
import styles from './CastList.module.css';
import CastCharacter from '../CastCharacter/CastCharacter';

const CastList = ({ cast }) => (
  <ul className={styles.CastBlock}>
    {cast.map(person => (
      <CastCharacter
        key={person.id}
        name={person.name}
        character={person.character}
        img={person.profile_path}
      />
    ))}
  </ul>
);

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default CastList;
