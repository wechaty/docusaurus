import React from "react";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <main id="body">
      <section id="heroSection">
        <p id="heroTagLine">
          In just a few lines of code, you can have a fully featured
        </p>
        <div id="heroTagLineWrapper">
          <p id="heroTagLineEmphasis1">
            <a target="_blank"> Chatbot </a> &nbsp;!
            <a target="_blank"> &nbsp;! </a>
            &nbsp;!
          </p>
        </div>
        <p id="heroSlogan">
          {" "}
          &#123; Code less works more, that's wechaty ! &#125;{" "}
        </p>
        <img
          alt="Chatbot"
          id="heroChatbotImage"
          src="https://user-images.githubusercontent.com/31739964/132517171-4eb33791-30ea-4f17-91ee-e3b170e8ef19.png"
        />
        <button id="letsDiveInButton"> Let’s Dive In </button>
        <img
          alt="Chatbot"
          id="heroImageMobile"
          src="https://user-images.githubusercontent.com/31739964/132517179-5802f6c3-1209-41d7-b993-3f2b197adc2d.png"
        />
      </section>
    </main>
  );
};

export default HeroSection;
