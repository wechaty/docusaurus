import React from "react";
import "./honors-and-awards-section.css";

const HonorsAndAwards = () => {
    
    return(
      <main id="body">
      <section>
              <div id="honorsAndAwardsHeadlineWrapper">
                <div id="honorsAndAwardsRectangle" />
                <p id="honorsAndAwardsHeadline">Honors &amp; Awards</p>
              </div>
              <div id="honorsAndAwardsSection">
                <div id="honorsAndAwardsFirstWrapper">
                  <p id="honorsAndAwardsFirstHeadline">
                    Wechaty won the award from the top domestic open source
                    organization
                  </p>
                  <div id="honorsAndAwardsFirstContentWrapper">
                    <p id="honorsAndAwardsFirstContent">
                      On December 30, Wechaty won important honours at the &#34;Tenth
                      China Cloud Computing Standards and Application Conference&#34;
                      organized by the China Open Source Cloud Alliance.
                    </p>
                    <a href="https://wechaty.js.org/2020/12/31/open-source-award-wechaty/" id="learnMoreButtonOne">Learn more</a>
                  </div>
                  <img
                    alt="Award One Image"
                    id="awardImageOne"
                    src="img/awardOne.webp"
                  />
                </div>
                <div id="honorsAndAwardsSecondWrapper">
                  <p id="honorsAndAwardsSecondHeadline">
                    Wechaty, was selected as &#34;33 Chinese Open Source Pioneers&#34;
                  </p>
                  <div id="honorsAndAwardsSecondContentWrapper">
                    <p id="honorsAndAwardsSecondContent">
                      Wechaty creator, BOT5 Club Chair, Tencent Chatbot TVP, and
                      PreAngel Partner Li Zhuohuan was named to the
                      SegmentFault&#039;s 2nd annual list of 33 Chinese Open Source
                      Pioneers.&#34;
                    </p>
                    <a href="https://wechaty.js.org/2020/12/23/open-source-pioneer-huan/" id="learnMoreButtonTwo">Learn more</a>
                  </div>
                  <img
                    alt="Award Two Image"
                    id="awardImageTwo"
                    src="img/awardTwo.webp"
                  />
                </div>
              </div>
            </section>
            </main>
    );
};
export default HonorsAndAwards;