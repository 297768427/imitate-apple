import React, { useState, useEffect } from "react";
import "../../css/iPhoneNavCss.css";
import compare from "../../images/forIphone/iphone_compareIcon.png";
import accessories from "../../images/forIphone/iphone_accessoriesIcon.png";
import iphone11pro from "../../images/forIphone/iphone_iphone11proIcon.png";
import iphone11 from "../../images/forIphone/iphone_iphone11Icon.png";
import iphoneXR from "../../images/forIphone/iphone_iphoneXRIcon.png";
import ios13 from "../../images/forIphone/iphone_ios13Icon.png";
import airpods from "../../images/forIphone/iphone_airpodsIcon.png";
import iphone8 from "../../images/forIphone/iphone_iphone8Icon.png";

function IphoneNav() {
  const [navState, setNavState] = useState(false);

  useEffect(() => {
    setNavState(true);
  }, []);
  return (
    <div className="iPhoneNavDiv">
      <div className="iPhoneNavEdgeDiv">
        <div
          className={
            navState ? "iPhoneNavContentDivShow" : "iPhoneNavContentDiv"
          }
        >
          <a href="/iPhone_iPhone11Pro">
            <div className="iPhoneNavChild">
              <img src={iphone11pro}></img>
              <br></br>
              <span>iPhone 11 Pro</span>
            </div>
          </a>
          <a href="/">
            <div className="iPhoneNavChild">
              <img src={iphone11}></img>
              <br></br>
              <span>iPhone 11</span>
            </div>
          </a>
          <a href="/">
            <div className="iPhoneNavChild">
              <img src={iphoneXR}></img>
              <br></br>
              <span>iPhone XR</span>
            </div>
          </a>
          <a href="/">
            <div className="iPhoneNavChild">
              <img src={iphone8}></img>
              <br></br>
              <span>iPhone 8</span>
            </div>
          </a>
          <a href="/">
            <div className="iPhoneNavChild">
              <img src={compare}></img>
              <br></br>
              <span>Compare</span>
            </div>
          </a>
          <a href="/">
            <div className="iPhoneNavChild">
              <img src={airpods}></img>
              <br></br>
              <span>AirPods</span>
            </div>
          </a>
          <a href="/">
            <div className="iPhoneNavChild">
              <img src={accessories}></img>
              <br></br>
              <span>Accessories</span>
            </div>
          </a>
          <a href="/">
            <div className="iPhoneNavChild">
              <img src={ios13}></img>
              <br></br>
              <span>iOS 13</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default IphoneNav;
