import React from "react";
import "../../css/iPadWhyIpadCss.css";
import why1Image from "../../images/forIpad/ipad_why1.png";
import why2Image from "../../images/forIpad/ipad_why2.png";
import why3Image from "../../images/forIpad/ipad_why3.png";
import why4Image from "../../images/forIpad/ipad_why4.png";

function IPadWhyIpad() {
  return (
    <div className="iPadWhyIpadDiv">
      <div className="iPadWhyIpadTitleDiv">
        <h1>What makes an iPad an iPad?</h1>
      </div>
      <div className="iPadWhyIpadTwoRowDiv">
        <div className="iPadWhyIpadTwoRowOneImageDiv">
          <img src={why1Image}></img>
        </div>
        <div className="iPadWhyIpadTwoRowOneTextDiv">
          <h1>Why iPad</h1>
          <span>
            Like a computer.<br></br>
            Unlike any computer.
          </span>
          <br></br>
          <br></br>
          <a href="/">Learn more ></a>
        </div>
      </div>
      <div className="iPadWhyIpadTwoRowDiv">
        <div className="iPadWhyIpadTwoRowTwoImageDiv">
          <img src={why2Image}></img>
        </div>
        <div className="iPadWhyIpadTwoRowTwoTextDiv">
          <h1>iPadOS</h1>
          <span>
            What’s in a name?<br></br>
            Quite a bit, actually.
          </span>
          <br></br>
          <br></br>
          <a href="/">See what’s new ></a>
        </div>
      </div>
      <div className="iPadWhyIpadTwoColumnDiv">
        <h1>iCloud</h1>
        <p>
          The best place for all your photos,<br></br> files and more.
        </p>
        <a href="/">Learn more ></a>
        <img src={why3Image}></img>
      </div>
      <div className="iPadWhyIpadTwoColumnDiv">
        <h1>Apple Pay</h1>
        <p>Cashless made effortless.</p>
        <a href="/">Learn more ></a>
        <img src={why4Image}></img>
      </div>
    </div>
  );
}

export default IPadWhyIpad;
