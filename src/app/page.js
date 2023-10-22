import styles from './page.module.css'
import React from 'react'

const Home = () => {
  return (<>
  <div className={styles.main}>
  <div className={styles.box1}>
    <p>Gameplay consists of frequent combat scenarios with characters punching and kicking or using their axe to slash/stab/impale enemies. Some larger enemies are opened up to intense finishing moves showing enemies being ripped apart, dismembered, or decapitated. Strong Language is used in the dialogue.</p>
    <button><a style={{textDecoration:'none',color:'white'}} href='https://www.amazon.in/PS4-God-of-War/dp/B07YQ73Y8T/ref=sr_1_1_mod_primary_new?keywords=god+of+war+4+ps5&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=8-1' target='_blank'>Click me</a></button>
  </div>
  <div className={styles.box2}></div>
  </div>
    </>)
}

export default Home