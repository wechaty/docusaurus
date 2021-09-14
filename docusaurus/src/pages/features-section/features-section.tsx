import React from "react";
import "./features-section.css";

const FeaturesSection = () => {
  return (
    <main id="body">
      <section id="featuresSection">
        <div id="featuresSectionHeadlineWrapper">
          <div id="featuresSectionRectangle" />
          <p id="featuresSectionHeadline">Why you would love to use this ?</p>
        </div>
        <div id="featuresSectionUpperWrapper">
          <div id="checkCircleWrapper">
            <div id="checkCircle">
              <img alt="Check Circle Vector" id="vector" src="tick-mark.webp" />
            </div>
            <div id="checkCircle">
              <img alt="Check Circle Vector" id="vector" src="tick-mark.webp" />
            </div>
            <div id="checkCircle">
              <img alt="Check Circle Vector" id="vector" src="tick-mark.webp" />
            </div>
            <div id="checkCircle">
              <img alt="Check Circle Vector" id="vector" src="tick-mark.webp" />
            </div>
            <div id="checkCircle">
              <img alt="Check Circle Vector" id="vector" src="tick-mark.webp" />
            </div>
            <div id="checkCircle">
              <img alt="Check Circle Vector" id="vector" src="tick-mark.webp" />
            </div>
            <div id="checkCircle">
              <img alt="Check Circle Vector" id="vector" src="tick-mark.webp" />
            </div>
            <div id="checkCircle">
              <img alt="Check Circle Vector" id="vector" src="tick-mark.webp" />
            </div>
            <div id="checkCircle">
              <img alt="Check Circle Vector" id="vector" src="tick-mark.webp" />
            </div>
          </div>
          <div id="featuresListingWrapper">
            <p id="featuresListing">User-interface interaction.</p>
            <p id="featuresListing">Process execution.</p>
            <p id="featuresListing">High volume data handling.</p>
            <p id="featuresListing">Learning capability.</p>
            <p id="featuresListing">Room managment.</p>
            <p id="featuresListing">Contact managment.</p>
            <p id="featuresListing">Intelligence dialogue managment.</p>
            <p id="featuresListing">Multi-platform support.</p>
            <p id="featuresListing">Friendship managment.</p>
          </div>
          <div id="videoPlaceholder" />
        </div>
        <div id="featuresSectionLowerWrapper">
          <div id="featuresNumberWrapper">
            <p id="featuresText">
              <a target="_blank"> Wechaty </a>
              is the only RPA chatbot maker that provides conversational
              chatbots with quick setup through
              <a target="_blank"> 6 lines of code.</a>
            </p>
            <div id="numberWrapperOne">
              <p id="projectsNumber">100&#43;</p>
              <p id="contributorsNumber">100&#43;</p>
            </div>
            <div id="numberWrapperTwo">
              <p id="starsNumber">10,000&#43;</p>
              <p id="developerFansNumber">9,600&#43;</p>
            </div>
            <p id="stars">stars</p>
            <p id="contributors">Contributors</p>
            <p id="developerFans">Developer Fans</p>
            <p id="projects">Projects</p>
          </div>
          <p id="featuresCatchyText">
            Quick &nbsp;&nbsp;|&nbsp;&nbsp; Cross platform
            &nbsp;&nbsp;|&nbsp;&nbsp; Easy to use
          </p>
        </div>
      </section>
    </main>
  );
};

export default FeaturesSection;
