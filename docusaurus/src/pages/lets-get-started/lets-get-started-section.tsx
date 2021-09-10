import React from "react";
import "./lets-get-started-section.css";

const LetsGetStarted = () => {
  return (
    <main id="body">
      <section>
        <div id="developersPortalHeadlineWrapper">
          <div id="developersPortalRectangle" />
          <p id="developersPortalHeadline"> Let's Get Started </p>
        </div>
        <div id="developersPortalSectionWrapper">
          <div id="tutorialsWrapper">
            <div id="contentWrapperOne">
              <img
                alt="Web Tutorials Image"
                id="tutorialsImage"
                src="https://user-images.githubusercontent.com/31739964/132522682-ca83fa36-8fbc-43c6-b2e2-e10946568e14.png"
              />
              <p id="tutorialsHeadline">Tutorials</p>
              <p id="developersPortalContent">
                If you are a total beginner to Wechaty or Chatbot application
                development in general, we recommend you start from the
                tutorials.
              </p>
              <div id="takeMeThereLinkButtonOne">
                <a id="takeMeThereLink">Take me there</a>
              </div>
            </div>
          </div>
          <div id="contentWrapperTwo">
            <img
              alt="Question Mark on a piece of Code"
              id="howToGuidesImage"
              src="https://user-images.githubusercontent.com/31739964/132522672-59232488-7912-4898-bf3e-2cf5b1a205f0.png"
            />
            <p id="howToGuidesHeadline">How-to Guides</p>
            <p id="developersPortalContent">
              They are more advanced than tutorials and pre requisite knowledge
              is required of how Wechaty works.
            </p>
            <div id="takeMeThereLinkButtonTwo">
              <a id="takeMeThereLink">Take me there</a>
            </div>
          </div>
          <div id="contentWrapperThree">
            <img
              src="https://user-images.githubusercontent.com/31739964/132522680-7f2b20b3-2b91-4a0b-8f02-89ddaae651b0.png"
              id="referencesImage"
              alt="Reference Book Image"
            />
            <p id="refrencesHeadline">Refrences</p>
            <p id="developersPortalContent">
              References contain technical reference for APIs and other aspects
              of Wechaty&#039;s machinery.
            </p>
            <div id="takeMeThereLinkButtonThree">
              <a id="takeMeThereLink">Take me there</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LetsGetStarted;
