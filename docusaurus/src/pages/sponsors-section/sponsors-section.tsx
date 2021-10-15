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
            <div id="microsoft">
              <img
                alt="Sponsor Image One"
                src="img/microsoft.webp"
                id="microsoftImage"
              ></img>
            </div>
            <div id="tencent">
              <img
                alt="Sponsor Image Three"
                src="img/tencent.webp"
                id="tencentImage"
              ></img>
            </div>
            <div id="juzi">
              <img
                alt="Sponsor Image Five"
                src="img/juzi.webp"
                id="juziImage"
              ></img>
            </div>
            <div id="gsod">
              <img
                alt="Sponsor Image Seven"
                src="img/gsod.webp"
                id="gsodImage"
              ></img>
            </div>
          </div>
          <div id="sponsorsSecondSection">
            <div id="tensorflow">
              <img
                alt="Sponsor Image Two"
                src="img/tensorflow.webp"
                id="tensorflowImage"
              ></img>
            </div>
            <div id="iscas">
              <img
                alt="Sponsor Image Four"
                src="img/iscas.webp"
                id="iscasImage"
              ></img>
            </div>
            <div id="sujitech">
              <img
                alt="Sponsor Image Six"
                src="img/sujitech.webp"
                id="sujitechImage"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </main>
    );
};
export default sponsors;