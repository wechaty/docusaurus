import React from "react";
import styles from "./sponsors-section.module.css";

const sponsors = () => {
    return (
<div className={styles.body}>
<div className={styles.sponsorsRectangle} />
<p className={styles.sponsorsHeadline}>Our Sponsors</p>
<div className={styles.sponsorsSectionWrapper}>
  <div className={styles.sponsorsFirstSection}>
    <div className={styles.sponsorsOne}>
      <img
        src="https://user-images.githubusercontent.com/31739964/132560333-6daecea2-b0cb-44ea-bc83-c857fc6eb667.png"
        className={styles.sponsorsOneImage}
      ></img>
    </div>
    <div className={styles.sponsorsThree}>
      <img
        src="https://static.overlay-tech.com/assets/cde3df57-5f07-4e68-b220-4d2c817ee75a.svg"
        className={styles.sponsorsThreeImage}
      ></img>
    </div>
    <div className={styles.sponsorsFive}>
      <img
        src="https://user-images.githubusercontent.com/31739964/132560519-ac0eb677-fc8b-4884-8de7-ce7c446bbeb1.png"
        className={styles.sponsorsFiveImage}
      ></img>
    </div>
    <div className={styles.sponsorsSeven}>
      <img
        src="https://static.overlay-tech.com/assets/401b43af-c035-48d7-a739-798731ed4e12.png"
        className={styles.sponsorsSevenImage}
      ></img>
    </div>
  </div>
  <div className={styles.sponsorsSecondSection}>
    <div className={styles.sponsorsTwo}>
      <img
        src="https://static.overlay-tech.com/assets/222afd35-a8f3-4c41-82ad-8cd10366b362.svg"
        className={styles.sponsorsTwoImage}
      ></img>
    </div>
    <div className={styles.sponsorsFour}>
      <img
        src="https://user-images.githubusercontent.com/31739964/132561006-587c1d50-e5eb-4c1d-980d-9887310d8a18.png"
        className={styles.sponsorsFourImage}
      ></img>
    </div>
    <div className={styles.sponsorsSix}>
      <img
        src="https://static.overlay-tech.com/assets/d391db82-7c1a-4c81-ab80-c2a194eb5020.png"
        className={styles.sponsorsSixImage}
      ></img>
    </div>
  </div>
</div>
</div>
    );
};
export default sponsors;