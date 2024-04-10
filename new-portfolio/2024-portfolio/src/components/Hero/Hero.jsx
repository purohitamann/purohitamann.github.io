import React from "react";
import { getImageURL } from "../../utils";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Aman Hiran Purohit</h1>
        <p className={styles.description}>
          Hello! I'm a Software & Network Major at Sheridan College in Oakville,
          actively seeking Co-op opportunities in tech for Fall 2024. I showcase
          my projects and blog on this platform. If you find my work intriguing,
          feel free to connect with me or endorse my skills.
        </p>

        <div className={styles.social}>
          <img src={getImageURL("linkedIn.png")} alt="linkedin" />
          <img src={getImageURL("github.png")} alt="github" />
          <a
            className={styles.reachOutbtn}
            href="mailto:purohitaman@icloud.com"
          >
            Reach out
          </a>
        </div>
        <div className={styles.leftBlur} />
        <div className={styles.topBlur} />
        <div className={styles.rightBlur} />
      </div>
      <div>
        <img
          className={styles.HeroImg}
          src={getImageURL("HeroImage.png")}
          alt="profile-image"
        />
      </div>
    </section>
  );
};

export default Hero;
