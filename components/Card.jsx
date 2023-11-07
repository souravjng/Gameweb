import React from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';

const Card = (props) => {
  const {title,details,img}=props;
  return (
    <div className={styles.main}>
    <Image className={styles.image} width={740} height={360}  src={img} alt="A sample image"/>
    <div className={styles.details}><h1 style={{backgroundColor:'none',fontSize:'41px'}}>{title}</h1><p>{details}</p></div>
    </div>
  )
}

export default Card