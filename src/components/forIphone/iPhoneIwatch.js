import React from "react";
import "../../css/iPhoneIwatchCss.css";
import iWatchIamge from "../../images/forIphone/iphone_iWatch.png";
import iWatchAppleIconImage from "../../images/forIphone/iphone_iWatchAppleIcon.png";

function IPhoneIwatch() {
  return (
    <div className="iPhoneIwatchDiv">
      <div className="iPhoneIwatchImageDiv">
        <img src={iWatchIamge}></img>
      </div>
      <div className="iPhoneIwatchTextDiv">
        <img src={iWatchAppleIconImage}></img>
        <h1>You’ve never seen a watch like this.</h1>
        <button>Buy</button>
        <br></br>
        <a href="/">Learn more ></a>
      </div>
    </div>
  );
}

export default IPhoneIwatch;
