import React from "react";
import "./sponsors-section.css";



const sponsors = () => {
    return (
      <main id="body">
<section>
        <div id="sponsorsRectangle" />
        <p id="sponsorsHeadline">Our Sponsors</p>
        <div id="sponsorsSectionWrapper">
          <div id="sponsorsFirstSection">
            <div id="sponsorsOne">
              <img
                alt="Sponsor Image One"
                src="microsoft.webp"
                id="sponsorsOneImage"
              ></img>
            </div>
            <div id="sponsorsThree">
              <img
                alt="Sponsor Image Three"
                src="tencent.webp"
                id="sponsorsThreeImage"
              ></img>
            </div>
            <div id="sponsorsFive">
              <img
                alt="Sponsor Image Five"
                src="juzi.webp"
                id="sponsorsFiveImage"
              ></img>
            </div>
            <div id="sponsorsSeven">
              <img
                alt="Sponsor Image Seven"
                src="gsod.webp"
                id="sponsorsSevenImage"
              ></img>
            </div>
          </div>
          <div id="sponsorsSecondSection">
            <div id="sponsorsTwo">
              <img
                alt="Sponsor Image Two"
                src="tensorflow.webp"
                id="sponsorsTwoImage"
              ></img>
            </div>
            <div id="sponsorsFour">
              <img
                alt="Sponsor Image Four"
                src="iscas.webp"
                id="sponsorsFourImage"
              ></img>
            </div>
            <div id="sponsorsSix">
              <img
                alt="Sponsor Image Six"
                src="sujitech.webp"
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