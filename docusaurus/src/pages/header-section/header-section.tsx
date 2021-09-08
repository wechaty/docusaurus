import React from "react";
import styles from "./wechatyLandingPageStylingSheet.module.css";
import heroChatbotImage from "./heroChatbotImage.png";
import heroImageMobile from "./heroImageMobile.png";

const WechatyLandingPage = () => {
  return (
    <div className={styles.body}>
      {/* Hero Section Starts */}

      <div className={styles.heroSection}>
        <p className={styles.heroTagLine}>
          In just a few lines of code, you can have a fully featured
        </p>
        <div className={styles.heroTagLineWrapper}>
          <p className={styles.heroTagLineEmphasis1}>
            <a target="_blank"> Chatbot </a> &nbsp;!
            <a target="_blank"> &nbsp;! </a>
            &nbsp;!
          </p>
        </div>
        <p className={styles.heroSlogan}>
          {" "}
          &#123; Code less works more, that's wechaty ! &#125;{" "}
        </p>
        <img
          alt="Chatbot"
          className={styles.heroChatbotImage}
          src={heroChatbotImage}
        />
        <button className={styles.letsDiveInButton}> Let’s Dive In </button>
        <img
          alt="Chatbot"
          className={styles.heroImageMobile}
          src={heroImageMobile}
        />
      </div>

      {/* Hero Section Ends */}
    </div>
  );
};

export default WechatyLandingPage;
