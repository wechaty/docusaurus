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
            <div id="tutorialsContentWrapper">
              <img
                alt="Web Tutorials Image"
                id="tutorialsImage"
                src="img/lets-get-started-section/tutorials.webp"
              />
              <p id="tutorialsHeadline">Tutorials</p>
              <p id="developersPortalContent">
                If you are a total beginner to Wechaty or Chatbot application
                development in general, we recommend you start from the
                tutorials.
              </p>
              <div id="tutorialsTakeMeThereLinkButton">
                <a
                  href="https://wechaty.js.org/docs/tutorials/"
                  id="takeMeThereLink"
                >
                  Take me there
                </a>
              </div>
            </div>
          </div>
          <div id="howToGuidesContentWrapper">
            <img
              alt="Question Mark on a piece of Code"
              id="howToGuidesImage"
              src="img/lets-get-started-section/how-to-guides.webp"
            />
            <p id="howToGuidesHeadline">How-to Guides</p>
            <p id="developersPortalContent">
              They are more advanced than tutorials and pre requisite knowledge
              is required of how Wechaty works.
            </p>
            <div id="howToGuidesTakeMeThereLinkButton">
              <a href="https://wechaty.js.org/docs/howto/" id="takeMeThereLink">
                Take me there
              </a>
            </div>
          </div>
          <div id="refrencesContentWrapper">
            <img
              src="img/lets-get-started-section/references.webp"
              id="referencesImage"
              alt="Reference Book Image"
            />
            <p id="refrencesHeadline">Refrences</p>
            <p id="developersPortalContent">
              References contain technical reference for APIs and other aspects
              of Wechaty&#039;s machinery.
            </p>
            <div id="refrencesTakeMeThereLinkButton">
              <a
                href="https://wechaty.js.org/docs/references/"
                id="takeMeThereLink"
              >
                Take me there
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LetsGetStarted;
