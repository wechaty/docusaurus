import React from "react";
import "./voice-of-developers-section.css";

const voiceOfDevelopers = () => {

    return (
      <main id="body">
      <section id="voiceOfDevelopersWrapper">
      <div id="voiceOfDevelopersRectangle" />
      <headline id="voiceOfDevelopersHeadline">Voice of Developers</headline>
      <div id="voiceOfDevelopersAllWrapper">
        <div id="voiceOfDevelopersOne">
          <img id="voiceOfDevelopersImageOne" />
          <p id="voiceOfDevelopersText">
            "This is an example text, voice of developers comes here"
          </p>
        </div>
        <div id="voiceOfDevelopersTwo">
          <img id="voiceOfDevelopersImageTwo" />
          <p id="voiceOfDevelopersText">
            "This is an example text, voice of developers comes here"
          </p>
        </div>
        <div id="voiceOfDevelopersThree">
          <img id="voiceOfDevelopersImageThree" />
          <p id="voiceOfDevelopersText">
            "This is an example text, voice of developers comes here"
          </p>
        </div>
      </div>
      <div id="ourContributorsButtonWrapper">
        <button id="ourContributorsButton">Meet our Contributors</button>
      </div>
    </section>
    </main>

    );

};
export default voiceOfDevelopers;