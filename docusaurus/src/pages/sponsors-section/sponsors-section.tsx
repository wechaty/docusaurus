import React from "react";
import "./sponsors-section.css";
import sponsorsOneImage from "./sponsorOne.png";
import sponsorsTwoImage from "./sponsorTwo.png";
import sponsorsThreeImage from "./sponsorThree.png";

const sponsors = () => {
    return (
      <main id="body">
<section>
        <div id="sponsorsRectangle" />
        <headline id="sponsorsHeadline">Our Sponsors</headline>
        <div id="sponsorsSectionWrapper">
          <div id="sponsorsFirstSection">
            <div id="sponsorsOne">
              <img
                alt="Sponsor Image One"
                src={sponsorsThreeImage}
                id="sponsorsOneImage"
              ></img>
            </div>
            <div id="sponsorsThree">
              <img
                alt="Sponsor Image Three"
                src="https://static.overlay-tech.com/assets/cde3df57-5f07-4e68-b220-4d2c817ee75a.svg"
                id="sponsorsThreeImage"
              ></img>
            </div>
            <div id="sponsorsFive">
              <img
                alt="Sponsor Image Five"
                src={sponsorsTwoImage}
                id="sponsorsFiveImage"
              ></img>
            </div>
            <div id="sponsorsSeven">
              <img
                alt="Sponsor Image Seven"
                src="https://static.overlay-tech.com/assets/401b43af-c035-48d7-a739-798731ed4e12.png"
                id="sponsorsSevenImage"
              ></img>
            </div>
          </div>
          <div id="sponsorsSecondSection">
            <div id="sponsorsTwo">
              <img
                alt="Sponsor Image Two"
                src="https://static.overlay-tech.com/assets/222afd35-a8f3-4c41-82ad-8cd10366b362.svg"
                id="sponsorsTwoImage"
              ></img>
            </div>
            <div id="sponsorsFour">
              <img
                alt="Sponsor Image Four"
                src={sponsorsOneImage}
                id="sponsorsFourImage"
              ></img>
            </div>
            <div id="sponsorsSix">
              <img
                alt="Sponsor Image Six"
                src="https://static.overlay-tech.com/assets/d391db82-7c1a-4c81-ab80-c2a194eb5020.png"
                id="sponsorsSixImage"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </main>
    );
};
export default sponsors;