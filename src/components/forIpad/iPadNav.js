import React, { useState, useEffect } from "react";
import "../../css/iPadNavCss.css";
import compareImage from "../../images/forIpad/ipad_compareIcon.png";
import airPodsImage from "../../images/forIpad/ipad_airPodsIcon.png";
import ipadOSImage from "../../images/forIpad/ipad_ipadOSIcon.png";
import iPadAirImage from "../../images/forIpad/ipad_iPadAirIcon.png";
import ipadAccessoriesImage from "../../images/forIpad/ipad_ipadAccessoriesIcon.png";
import iPadProImage from "../../images/forIpad/ipad_iPadProIcon.png";
import iPadMiniImage from "../../images/forIpad/ipad_iPadMiniIcon.png";
import pencilImage from "../../images/forIpad/ipad_pencilIcon.png";
import keyboardImage from "../../images/forIpad/ipad_keyboardIcon.png";
import iPadImage from "../../images/forIpad/ipad_iPadIcon.png";

function IPadNav() {
  const [navState, setNavState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNavState(true);
    }, 200);
  }, []);
  return (
    <div className="iPadNavDiv">
      <div
        className={navState ? "iPadNavContentDiv" : "iPadNavContentDivHidden"}
      >
        <a href="/iPad_iPadPro">
          <div className="iPadNavChild">
            <img src={iPadProImage}></img>
            <br></br>
            <span>iPad Pro</span>
          </div>
        </a>
        <a href="/">
          <div className="iPadNavChild">
            <img src={iPadAirImage}></img>
            <br></br>
            <span>iPad Air</span>
          </div>
        </a>
        <a href="/">
          <div className="iPadNavChild">
            <img src={iPadImage}></img>
            <br></br>
            <span>iPad</span>
          </div>
        </a>
        <a href="/">
          <div className="iPadNavChild">
            <img src={iPadMiniImage}></img>
            <br></br>
            <span>iPad mini</span>
          </div>
        </a>
        <a href="/">
          <div className="iPadNavChild">
            <img src={compareImage}></img>
            <br></br>
            <span>Compare</span>
          </div>
        </a>
        <a href="/">
          <div className="iPadNavChild">
            <img src={pencilImage}></img>
            <br></br>
            <span>Apple Pencil</span>
          </div>
        </a>
        <a href="/">
          <div className="iPadNavChild">
            <img src={keyboardImage}></img>
            <br></br>
            <span>Smart Keyboard</span>
          </div>
        </a>
        <a href="/">
          <div className="iPadNavChild">
            <img src={airPodsImage}></img>
            <br></br>
            <span>AirPods</span>
          </div>
        </a>
        <a href="/">
          <div className="iPadNavChild">
            <img src={ipadAccessoriesImage}></img>
            <br></br>
            <span>Accessories</span>
          </div>
        </a>
        <a href="/">
          <div className="iPadNavChild">
            <img src={ipadOSImage}></img>
            <br></br>
            <span>iPadOS</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default IPadNav;
