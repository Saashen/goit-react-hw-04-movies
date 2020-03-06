import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css';

const Nav = () => (
  <nav className={styles.NavContainer}>
    <ul className={styles.Nav}>
      <li className={styles.NavLi}>
        <NavLink
          to="/"
          exact
          className={styles.Link}
          activeClassName={styles.ActiveLink}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.NavLi}>
        <NavLink
          to="/movies"
          className={styles.Link}
          activeClassName={styles.ActiveLink}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
