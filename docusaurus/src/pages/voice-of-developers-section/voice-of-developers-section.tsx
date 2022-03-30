import React from "react";
import "./voice-of-developers-section.css";

const VoiceOfDevelopers = () => {

    return (
      <main id="body">
      <section id="voiceOfDevelopersWrapper">
      <div id="voiceOfDevelopersRectangle" />
      <p id="voiceOfDevelopersHeadline">Voice of Developers</p>
      <div id="voiceOfDevelopersAllWrapper">
        <div id="voiceOfDevelopersOne">
          <img id="voiceOfDevelopersImageOne" />
          <p id="voiceOfDevelopersText">
          "Wechaty is great". 
           <br/>-- @Samurais, SnapLingo Director of Engineering
          </p>
        </div>
        <div id="voiceOfDevelopersTwo">
          <img id="voiceOfDevelopersImageTwo" />
          <p id="voiceOfDevelopersText">
          "Wechaty让运营人员更多的时间思考如何进行活动策划、留存用户，商业变现"
            <br/>-- @lijiarui, Orange Interactive CEO.
          </p>
        </div>
        <div id="voiceOfDevelopersThree">
          <img id="voiceOfDevelopersImageThree" />
          <p id="voiceOfDevelopersText">
          "Wechaty is a great solution, I believe there would be much more users recognize it." 
           <br/> -- @Gcaufy, Tencent Engineer, Author of WePY
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
export default VoiceOfDevelopers;