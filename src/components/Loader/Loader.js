import React from 'react';
import LoaderComponent from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <LoaderComponent
    className={styles.Loader}
    type="ThreeDots"
    color="#d53a9d"
    height={100}
    width={100}
  />
);

export default Loader;
