import React from "react";
import styles from "./features-section.module.css";

const FeaturesSection = () => {
  return (
    <div className={styles.body}>
      <div className={styles.featuresSection}>
        <div className={styles.featuresSectionHeadlineWrapper}>
          <div className={styles.featuresSectionRectangle} />
          <p className={styles.featuresSectionHeadline}>
            Why you would love to use this ?
          </p>
        </div>
        <div className={styles.featuresSectionUpperWrapper}>
          <div className={styles.checkCircleWrapper}>
            <div className={styles.checkCircle}>
              <img
                alt=""
                className={styles.vector}
                src="https://static.overlay-tech.com/assets/a633a787-7bc5-4b36-abe7-fbc1a8a48f1f.svg"
              />
            </div>
            <div className={styles.checkCircle}>
              <img
                alt=""
                className={styles.vector}
                src="https://static.overlay-tech.com/assets/a4da0ed6-796d-474e-bdad-f3ce523e2737.svg"
              />
            </div>
            <div className={styles.checkCircle}>
              <img
                alt=""
                className={styles.vector}
                src="https://static.overlay-tech.com/assets/d503de93-8cbe-4f59-b9f8-a4e8d035244d.svg"
              />
            </div>
            <div className={styles.checkCircle}>
              <img
                alt=""
                className={styles.vector}
                src="https://static.overlay-tech.com/assets/6dcdf1af-421f-4aaf-9e73-6dbe852d256b.svg"
              />
            </div>
            <div className={styles.checkCircle}>
              <img
                alt=""
                className={styles.vector}
                src="https://static.overlay-tech.com/assets/f11608f7-b084-4ce6-8a82-5312c0d0bacb.svg"
              />
            </div>
            <div className={styles.checkCircle}>
              <img
                alt=""
                className={styles.vector}
                src="https://static.overlay-tech.com/assets/888ea73b-cd14-485f-bbf2-4b7ddfd832e9.svg"
              />
            </div>
            <div className={styles.checkCircle}>
              <img
                alt=""
                className={styles.vector}
                src="https://static.overlay-tech.com/assets/3af373a9-ea0d-4933-9fc7-633f424f249a.svg"
              />
            </div>
            <div className={styles.checkCircle}>
              <img
                alt=""
                className={styles.vector}
                src="https://static.overlay-tech.com/assets/7b6f8977-382c-440b-b3f6-f83cc2cde17e.svg"
              />
            </div>
            <div className={styles.checkCircle}>
              <img
                alt=""
                className={styles.vector}
                src="https://static.overlay-tech.com/assets/60c6282c-1bef-43c5-a36b-52cbfcaf6041.svg"
              />
            </div>
          </div>
          <div className={styles.featuresListingWrapper}>
            <p className={styles.featuresListing}>
              User-interface interaction.
            </p>
            <p className={styles.featuresListing}>Process execution.</p>
            <p className={styles.featuresListing}>High volume data handling.</p>
            <p className={styles.featuresListing}>Learning capability.</p>
            <p className={styles.featuresListing}>Room managment.</p>
            <p className={styles.featuresListing}>Contact managment.</p>
            <p className={styles.featuresListing}>
              Intelligence dialogue managment.
            </p>
            <p className={styles.featuresListing}>Multi-platform support.</p>
            <p className={styles.featuresListing}>Friendship managment.</p>
          </div>
          <div className={styles.videoPlaceholder} />
        </div>
        <div className={styles.featuresSectionLowerWrapper}>
          <div className={styles.featuresNumberWrapper}>
            <p className={styles.featuresText}>
              <a target="_blank"> Wechaty </a>
              is the only RPA chatbot maker that provides conversational
              chatbots with quick setup through
              <a target="_blank"> 6 lines of code.</a>
            </p>
            <div className={styles.numberWrapperOne}>
              <p className={styles.number100}>100&#43;</p>
              <p className={styles.number100Two}>100&#43;</p>
            </div>
            <div className={styles.numberWrapperTwo}>
              <p className={styles.number10000}>10,000&#43;</p>
              <p className={styles.number9600}>9,600&#43;</p>
            </div>
            <p className={styles.stars}>stars</p>
            <p className={styles.contributors}>Contributors</p>
            <p className={styles.developerFans}>Developer Fans</p>
            <p className={styles.projects}>Projects</p>
          </div>
          <p className={styles.featuresCatchyText}>
            Quick &nbsp;&nbsp;|&nbsp;&nbsp; Cross platform
            &nbsp;&nbsp;|&nbsp;&nbsp; Easy to use
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
