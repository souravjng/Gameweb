import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.main}>
        
        <p>&copy; 2023 Your Gaming Website</p>
        <p>Contact: Souravjangra108@gmail.com</p>
        <p>Follow us on <a href="https://twitter.com/YourGaming" target="_blank">Linkdin</a> </p>
    </div>
  )
}

export default Footer;