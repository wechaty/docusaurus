import React from "react";
import styles from "./lets-get-started-section.module.css";

const LetsDiveIn = () => {
  return (
    <div className={styles.body}>
      <div className={styles.developersPortalHeadlineWrapper}>
        <div className={styles.developersPortalRectangle} />
        <p className={styles.developersPortalHeadline}> Let's Get Started </p>
      </div>
      <div className={styles.developersPortalSectionWrapper}>
        <div className={styles.tutorialsWrapper}>
          <div className={styles.contentWrapperOne}>
            <img
              alt="Web Tutorials Image"
              className={styles.tutorialsImage}
              src="https://user-images.githubusercontent.com/31739964/132522682-ca83fa36-8fbc-43c6-b2e2-e10946568e14.png"
            />
            <p className={styles.tutorialsHeadline}>Tutorials</p>
            <p className={styles.developersPortalContent}>
              If you are a total beginner to Wechaty or Chatbot application
              development in general, we recommend you start from the tutorials.
            </p>
            <div className={styles.takeMeThereLinkButtonOne}>
              <a className={styles.takeMeThereLink}>Take me there</a>
            </div>
          </div>
        </div>
        <div className={styles.contentWrapperTwo}>
          <img
            alt="Question Mark on a piece of Code"
            className={styles.howToGuidesImage}
            src="https://user-images.githubusercontent.com/31739964/132522672-59232488-7912-4898-bf3e-2cf5b1a205f0.png"
          />
          <p className={styles.howToGuidesHeadline}>How-to Guides</p>
          <p className={styles.developersPortalContent}>
            They are more advanced than tutorials and pre requisite knowledge is
            required of how Wechaty works.
          </p>
          <div className={styles.takeMeThereLinkButtonTwo}>
            <a className={styles.takeMeThereLink}>Take me there</a>
          </div>
        </div>
        <div className={styles.contentWrapperThree}>
          <img
            src="https://user-images.githubusercontent.com/31739964/132522680-7f2b20b3-2b91-4a0b-8f02-89ddaae651b0.png"
            className={styles.referencesImage}
            alt="Reference Book Image"
          />
          <p className={styles.refrencesHeadline}>Refrences</p>
          <p className={styles.developersPortalContent}>
            References contain technical reference for APIs and other aspects of
            Wechaty&#039;s machinery.
          </p>
          <div className={styles.takeMeThereLinkButtonThree}>
            <a className={styles.takeMeThereLink}>Take me there</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsDiveIn;
