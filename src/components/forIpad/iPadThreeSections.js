import React from "react";
import "../../css/iPadThreeSectionsCss.css";
import section1Image from "../../images/forIpad/ipad_section1.png";
import section2Image from "../../images/forIpad/ipad_section2.png";
import section3Image from "../../images/forIpad/ipad_section3.png";

function IPadThreeSections() {
  return (
    <div className="iPadThreeSectionsDiv">
      <div className="iPadThreeSectionsEachDiv">
        <img src={section1Image}></img>
        <h4>Free delivery</h4>
        <span>
          Orders over A$250 placed before 2:00 pm AEDT are delivered the next
          business day in most metro areas. Or pick up available items in an
          hour at an Apple Store.
        </span>
        <br></br>
        <a href="/">Learn more ></a>
      </div>
      <div className="iPadThreeSectionsEachDiv">
        <img src={section2Image}></img>
        <h4>Personal Setup</h4>
        <span>
          We’ll show you how to get the most out of your new iPad, online or in
          store.
        </span>
        <br></br>
        <a href="/">Learn more ></a>
      </div>
      <div className="iPadThreeSectionsEachDiv">
        <img src={section3Image}></img>
        <h4>Personalise it</h4>
        <span>
          Engrave your iPad with your name or a personal note — for free. Only
          at Apple.
        </span>
        <br></br>
        <a href="/">Learn more ></a>
      </div>
    </div>
  );
}

export default IPadThreeSections;
