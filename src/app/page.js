import styles from "./page.module.scss";
import React from "react";
import Card from "../../components/Card";
import img1 from "../../public/attack2.gif";
import img2 from "../../public/fight1.png";
import img3 from "../../public/fight2.png";
import img4 from "../../public/attack1.gif";

const Home = () => {
  const data = [
    {
      title: "Enter the Norse realm, A second chance",
      details:
        "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… And teach his son to do the same.",
      img: img4,
    },
    {
      title: "A darker, more elemental world",
      details:
        "Kratos is a father again. As mentor and protector to Atreus, a son determined to earn his respect, he is forced to deal with and control the rage that has long defined him while out in a very dangerous world with his son.",
      img: img2,
    },
    {
      title: "Visceral physical combat",
      details:
        "From the marble and columns of ornate Olympus to the gritty forests, mountains, and caves of Pre-Viking Norse lore, this is a distinctly new realm with its own pantheon of creatures, monsters, and gods.",
      img: img3,
    },
    {
      title: "A new main weapon and new abilities",
      details:
        "A new main weapon and new abilities retain the defining spirit of God of War while presenting a vision of violent conflict that forges new ground in the genre.",
      img: img1,
    },
  ];
  const text1="Don't Be Sorry. Be Better.";
  const text2="What's New";
  const text3="Gameplay consists of frequent combat scenarios with characters punching and kicking or using their axe to slash/stab/impale enemies. Some larger enemies are opened up to intense finishing moves showing enemies being ripped apart, dismembered, or decapitated. Strong Language is used in the dialogue.";

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main1}>
          <div className={styles.box1}>
            <p>
              {text3}
            </p>
            <button>
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="https://www.amazon.in/PS4-God-of-War/dp/B07YQ73Y8T/ref=sr_1_1_mod_primary_new?keywords=god+of+war+4+ps5&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=8-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click me
        </a>
      </button>
          </div>
          <div className={styles.box2}></div>
        </div>

        <div className={styles.main2}>
          <h1>{text1}</h1>
        </div>
        <div className={styles.main3}>
          <h1 style={{ backgroundColor: "#8d99ae35" }}>{text2}</h1>
          <div className={styles.info}>
            {data.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "200px" }}></div>
    </>
  );
};

export default Home;
