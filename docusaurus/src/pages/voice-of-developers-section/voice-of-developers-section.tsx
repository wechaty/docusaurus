import React from "react";
import styles from "./voice-of-developers-section.module.css";

const voiceOfDevelopers = () => {

    return (
        <div className={styles.body}>
        <div className={styles.voiceOfDevelopersWrapper}>
        <div className={styles.voiceOfDevelopersRectangle} />
        <p className={styles.voiceOfDevelopersHeadline}>Voice of Developers</p>
        <div className={styles.voiceOfDevelopersAllWrapper}>
          <div className={styles.voiceOfDevelopersOne}>
            <img className={styles.voiceOfDevelopersImageOne} />
            <p className={styles.voiceOfDevelopersText}>
              "This is an example text, voice of developers comes here"
            </p>
          </div>
          <div className={styles.voiceOfDevelopersTwo}>
            <img className={styles.voiceOfDevelopersImageTwo} />
            <p className={styles.voiceOfDevelopersText}>
              "This is an example text, voice of developers comes here"
            </p>
          </div>
          <div className={styles.voiceOfDevelopersThree}>
            <img className={styles.voiceOfDevelopersImageThree} />
            <p className={styles.voiceOfDevelopersText}>
              "This is an example text, voice of developers comes here"
            </p>
          </div>
        </div>
        <div className={styles.ourContributorsButtonWrapper}>
          <button className={styles.ourContributorsButton}>
            Meet our Contributors
          </button>
        </div>
      </div>
      </div>

    );

};
export default voiceOfDevelopers;