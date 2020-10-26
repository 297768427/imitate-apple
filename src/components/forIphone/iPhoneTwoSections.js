import React from "react";
import "../../css/iPhoneTwoSectionsCss.css";
import sectionOneImage from "../../images/forIphone/iphone_section1.png";
import sectionTwoImage from "../../images/forIphone/iphone_section2.png";

function IPhoneTwoSections() {
  return (
    <div className="iPhoneTwoSectionsDiv">
      <div className="iPhoneTwoSectionsEachDiv">
        <img src={sectionOneImage}></img>
        <h4>Free delivery</h4>
        <span>
          Orders over A$250 placed before 2:00 pm AEDT are delivered the next
          business day in most metro areas. Or pick up available items in an
          hour at an Apple Store.
        </span>
        <br></br>
        <br></br>
        <a href="/">Learn more ></a>
      </div>
      <div className="iPhoneTwoSectionsEachDiv">
        <img src={sectionTwoImage}></img>
        <h4>Online Personal Session</h4>
        <span>
          From basics to pro tips, get more out of your new iPhone with the help
          of a Specialist.
        </span>
        <br></br>
        <br></br>
        <a href="/">Learn more ></a>
      </div>
    </div>
  );
}

export default IPhoneTwoSections;
