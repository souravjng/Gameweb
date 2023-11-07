import React from 'react';
import styles from './Banner.module.scss';

const Banner = ({text}) => {
  return (
    <div className={styles.main}>
        <h1>{text}</h1>
    </div>
  )
}

export default Banner;