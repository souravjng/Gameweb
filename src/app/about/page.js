import React from 'react';
import styles from './page.module.scss';

const About = () => {
  return (
    <div className={styles.supermain}>
      <div className={styles.main}>
        <div className={styles.img}></div>
        <div className={styles.text}>
          <h1>Unveiling the Epic Saga of God of War 4</h1>
          <p>
            Welcome to our realm, a dedicated corner for all things God of War
            4. Here, we embark on a mythic journey through the epic and
            immersive world of Kratos and Atreus in this iconic installment of
            the God of War series.
            <br />
            <br />
            As you navigate through our pages, you will find:
            <br />
            <br />
            1. Lore and Mythology: Delve deep into the rich tapestry of Norse
            mythology, discover the inspirations behind the game&apos;s story,
            and uncover the connections to the previous God of War titles.
            <br />
            2. Gameplay Mastery: Learn the secrets to mastering Kratos&apos;s
            combat skills and Atreus&apos;s archery prowess. Find tips, tricks,
            and strategies to conquer the game&apos;s challenges.
            <br />
            3. Story Analysis: Explore the emotional and psychological
            dimensions of the game&apos;s characters, from Kratos and Atreus to
            the intriguing cast of Norse deities and creatures. Uncover the
            symbolism and themes woven throughout the narrative.
            <br />
            4. Community & Fan Art: Connect with fellow God of War enthusiasts
            through our forums and share your own fan art and creations inspired
            by the game.
            <br />
            5. Updates & News: Stay up to date with the latest developments in
            the God of War universe, including news about upcoming sequels,
            adaptations, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
