import React from "react";
import styles from "./sponsors-section.module.css";

const sponsors = () => {
    return (
      <main id="body">
<section>
        <div id="honorsAndAwardsHeadlineWrapper">
          <div id="honorsAndAwardsRectangle" />
          <headline id="honorsAndAwardsHeadline">Honors &amp; Awards</headline>
        </div>
        <div id="honorsAndAwardsSection">
          <div id="honorsAndAwardsFirstWrapper">
            <headline id="honorsAndAwardsFirstHeadline">
              Wechaty won the award from the top domestic open source
              organization
            </headline>
            <div id="honorsAndAwardsFirstContentWrapper">
              <p id="honorsAndAwardsFirstContent">
                On December 30, Wechaty won important honours at the &#34;Tenth
                China Cloud Computing Standards and Application Conference&#34;
                organized by the China Open Source Cloud Alliance.
              </p>
              <a id="learnMoreButtonOne">Learn more</a>
            </div>
            <img
              alt="Award One Image"
              id="awardImageOne"
              src="https://static.overlay-tech.com/assets/6e34fc8d-8492-4328-b867-cb16a3507b53.png"
            />
          </div>
          <div id="honorsAndAwardsSecondWrapper">
            <headline id="honorsAndAwardsSecondHeadline">
              Wechaty, was selected as &#34;33 Chinese Open Source Pioneers&#34;
            </headline>
            <div id="honorsAndAwardsSecondContentWrapper">
              <p id="honorsAndAwardsSecondContent">
                Wechaty creator, BOT5 Club Chair, Tencent Chatbot TVP, and
                PreAngel Partner Li Zhuohuan was named to the
                SegmentFault&#039;s 2nd annual list of 33 Chinese Open Source
                Pioneers.&#34;
              </p>
              <a id="learnMoreButtonTwo">Learn more</a>
            </div>
            <img
              alt="Award Two Image"
              id="awardImageTwo"
              src="https://static.overlay-tech.com/assets/b3ff4dd1-cc78-4275-b428-fa17968ee60d.png"
            />
          </div>
        </div>
      </section>
      </main>
    );
};
export default sponsors;