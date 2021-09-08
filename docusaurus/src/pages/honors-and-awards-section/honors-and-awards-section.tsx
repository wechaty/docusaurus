import React from "react";
import styles from "./honors-and-awards-section.module.css";

const honorsAndAwards = () => {
    
    return(
        <div className={styles.honorsAndAwardsHeadlineWrapper}>
        <div className={styles.honorsAndAwardsRectangle} />
        <p className={styles.honorsAndAwardsHeadline}>Honors &amp; Awards</p>
      </div>
      <div className={styles.honorsAndAwardsSection}>
        <div className={styles.honorsAndAwardsFirstWrapper}>
          <p className={styles.honorsAndAwardsFirstHeadline}>
            Wechaty won the award from the top domestic open source organization
          </p>
          <div className={styles.honorsAndAwardsFirstContentWrapper}>
            <p className={styles.honorsAndAwardsFirstContent}>
              On December 30, Wechaty won important honours at the &#34;Tenth
              China Cloud Computing Standards and Application Conference&#34;
              organized by the China Open Source Cloud Alliance.
            </p>
            <a className={styles.learnMoreButtonOne}>Learn more</a>
          </div>
          <img
            alt="Award One Image"
            className={styles.awardImageOne}
            src="https://static.overlay-tech.com/assets/6e34fc8d-8492-4328-b867-cb16a3507b53.png"
          />
        </div>
        <div className={styles.honorsAndAwardsSecondWrapper}>
          <p className={styles.honorsAndAwardsSecondHeadline}>
            Wechaty, was selected as &#34;33 Chinese Open Source Pioneers&#34;
          </p>
          <div className={styles.honorsAndAwardsSecondContentWrapper}>
            <p className={styles.honorsAndAwardsSecondContent}>
              Wechaty creator, BOT5 Club Chair, Tencent Chatbot TVP, and
              PreAngel Partner Li Zhuohuan was named to the SegmentFault&#039;s
              2nd annual list of 33 Chinese Open Source Pioneers.&#34;
            </p>
            <a className={styles.learnMoreButtonTwo}>Learn more</a>
          </div>
          <img
            alt="Award Two Image"
            className={styles.awardImageTwo}
            src="https://static.overlay-tech.com/assets/b3ff4dd1-cc78-4275-b428-fa17968ee60d.png"
          />
        </div>
      </div>

    );
};
export default honorsAndAwards;