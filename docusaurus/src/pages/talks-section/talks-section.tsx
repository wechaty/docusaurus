import React from "react";
import styles from "./talks-section.module.css";

const WechatyLandingPage = () => {
  return (
    <div className={styles.body}>
      <div className={styles.talksSectionWrapper}>
        <div className={styles.talksRectangle} />
        <p className={styles.talksHeadline}> Talks </p>
        <div className={styles.talksBothWrapper}>
          <div className={styles.talksWrapper}>
            <div className={styles.talksUpperWrapper}>
              <img
                alt="Award Image"
                className={styles.talksImage}
                src="https://static.overlay-tech.com/assets/b52ac311-3f89-49c2-8fb4-4a6bb700f86f.png"
              />
              <p className={styles.talksDetail}>
                Speaker -
                <br />
                Huan Li
                <br />
                <br />
                Venue -
                <br />
                Azure SHOW
              </p>
            </div>
            <div className={styles.talksContentWrapper}>
              <p className={styles.talksContentHeadline}>
                Wechaty 2016 - 2020 : Four Years of Open Source
              </p>
              <p className={styles.talksContent}>
                Welcome to the open source story of AzureShow, the first issue
                guest Huan Li, the co-author of the first Conversational User
                Interface best-selling book "Chatbot from 0 to 1" in Chinese,
                the author of Wechaty.
              </p>
              <a className={styles.readMoreLink}>Read More</a>
            </div>
          </div>
          <div className={styles.talksWrapper}>
            <div className={styles.talksUpperWrapper}>
              <img
                alt="Award Image Two"
                className={styles.talksImage}
                src="https://static.overlay-tech.com/assets/d1a2bfce-b571-4607-a668-4a271328f987.png"
              />
              <p className={styles.talksDetail}>
                Speaker -
                <br />
                Huan Li
                <br />
                <br />
                Venue -
                <br />
                Node Party
              </p>
            </div>
            <div className={styles.talksContentWrapper}>
              <p className={styles.talksContentHeadline}>
                Wechaty 101: from v0.0 to v0.7
              </p>
              <p className={styles.talksContent}>
                This talk was presented at Node Party Beijing #18 Dec 2016, all
                about ChatBots.
                <br />
                what does it do?
                <br />
                why does it exist?
                <br />
                how does it work?
                <br />
                what’s in it for me?
              </p>
              <a className={styles.readMoreLink}>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WechatyLandingPage;
