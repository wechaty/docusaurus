import React from "react";
import styles from "./hero-section.module.css";

const HeroSection = () => {
  return (
    <div className={styles.body}>
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
          src="https://user-images.githubusercontent.com/31739964/132517171-4eb33791-30ea-4f17-91ee-e3b170e8ef19.png"
        />
        <button className={styles.letsDiveInButton}> Let’s Dive In </button>
        <img
          alt="Chatbot"
          className={styles.heroImageMobile}
          src="https://user-images.githubusercontent.com/31739964/132517179-5802f6c3-1209-41d7-b993-3f2b197adc2d.png"
        />
      </div>
    </div>
  );
};

export default HeroSection;
