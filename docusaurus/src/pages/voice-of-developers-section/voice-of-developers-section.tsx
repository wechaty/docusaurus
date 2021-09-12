import React from "react";
import "./voice-of-developers-section.css";

const voiceOfDevelopers = () => {

    return (
      <main id="body">
      <section id="voiceOfDevelopersWrapper">
      <div id="voiceOfDevelopersRectangle" />
      <p id="voiceOfDevelopersHeadline">Voice of Developers</p>
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
        <a href="https://wechaty.js.org/contributors/">
        <button id="ourContributorsButton">Meet our Contributors</button>
        </a>
      </div>
    </section>
    </main>

    );

};
export default voiceOfDevelopers;