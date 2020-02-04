import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css';

const Nav = () => (
  <ul className={styles.Nav}>
    <li>
      <NavLink
        to="/"
        exact
        className={styles.Link}
        activeClassName={styles.ActiveLink}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/movies"
        className={styles.Link}
        activeClassName={styles.ActiveLink}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Nav;
