import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Loader from '../Loader/Loader';

import NotFoundPage from '../../pages/NotFoundPage';
import * as router from '../../services/router';
import styles from './App.module.css';

const App = () => (
  <div className={styles.App}>
    <Nav />
    <Suspense fallback={<Loader />}>
      <Switch>
        {router.routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
