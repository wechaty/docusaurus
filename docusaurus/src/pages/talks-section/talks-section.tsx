import React from "react";
import "./talks-section.css";

const WechatyLandingPage = () => {
  return (
    <main id="body">
      <section id="talksSectionWrapper">
        <div id="talksRectangle" />
        <p id="talksHeadline"> Talks </p>
        <div id="talksBothWrapper">
          <div id="talksWrapper">
            <div id="talksUpperWrapper">
              <img
                alt="Award Image"
                id="talksImage"
                src="talks-image-one.webp"
              />
              <p id="talksDetail">
                Speaker -
                <br />
                Huan Li
                <br />
                <br />
                Venue -
                <br />
                Azure SHOW
              </p>
            </div>
            <div id="talksContentWrapper">
              <p id="talksContentHeadline">
                Wechaty 2016 - 2020 : Four Years of Open Source
              </p>
              <p id="talksContent">
                Welcome to the open source story of AzureShow, the first issue
                guest Huan Li, the co-author of the first Conversational User
                Interface best-selling book "Chatbot from 0 to 1" in Chinese,
                the author of Wechaty.
              </p>
              <a
                href="https://wechaty.js.org/2020/05/19/open-source-wechaty-huan-2020/"
                id="readMoreLink"
              >
                Read More
              </a>
            </div>
          </div>
          <div id="talksWrapper">
            <div id="talksUpperWrapper">
              <img
                alt="Award Image Two"
                id="talksImage"
                src="talks-image-two.webp"
              />
              <p id="talksDetail">
                Speaker -
                <br />
                Huan Li
                <br />
                <br />
                Venue -
                <br />
                Node Party
              </p>
            </div>
            <div id="talksContentWrapper">
              <p id="talksContentHeadline">Wechaty 101: from v0.0 to v0.7</p>
              <p id="talksContent">
                This talk was presented at Node Party Beijing #18 Dec 2016, all
                about ChatBots.
                <br />
                what does it do?
                <br />
                why does it exist?
                <br />
                how does it work?
                <br />
                what’s in it for me?
              </p>
              <a
                href="https://wechaty.js.org/2017/01/06/wechaty-101-presentation/"
                id="readMoreLink"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WechatyLandingPage;
