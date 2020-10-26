import React from "react";
import "../../css/iPhoneiPhone11ProCss.css";
import iphone11ProImage from "../../images/forIphone/iphone_iphone11Pro.png";

function IPhoneiPhone11Pro() {
  return (
    <div className="iPhoneiPhone11ProDiv">
      <div className="iPhonetradeIphoneAlertDiv">
        <span>
          Trade in your current iPhone at an Apple Store and you could get up to
          A$560 in credit towards a new one.
          <a href="/"> Learn more ></a>
        </span>
      </div>
      <div className="iPhoneiPhone11ProContentDiv">
        <div className="iphoneiPhone11ProTextDiv">
          <h2>iPhone 11 Pro</h2>
          <h1>Pro cameras. Pro display. Pro performance.</h1>
          <a href="/">
            <button>Buy</button>
          </a>
          <br></br>
          <a href="/" style={{ fontSize: "18px" }}>
            Learn more >
          </a>
        </div>
        <div className="iphoneiPhone11ProImageDiv">
          <img src={iphone11ProImage}></img>
        </div>
      </div>
    </div>
  );
}

export default IPhoneiPhone11Pro;
