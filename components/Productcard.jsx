import React from 'react';
import styles from './Productcard.module.scss';
import Image from 'next/image';
import Link from "next/link";

const Card = (props) => {
  const { img, price, title } = props;



  return (
    <Link to="https://www.google.com"><div className={styles.main}>
      <Image className={styles.image} width={300} height={300} src={img} alt="gamepad_img" />
      <div className={styles.details}>
        <h1>{title}</h1>
        <p>Rs{price}</p>
      </div>
    </div></Link>
  )
}

export default Card;
