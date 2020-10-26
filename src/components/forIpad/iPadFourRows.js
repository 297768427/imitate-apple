import React from "react";
import "../../css/iPadFourRowsCss.css";
import ipadProImage from "../../images/forIpad/ipad_ipadPro.png";
import ipadAirImage from "../../images/forIpad/ipad_ipadAir.png";
import ipadImage from "../../images/forIpad/ipad_ipad.png";
import ipadMiniImage from "../../images/forIpad/ipad_ipadMini.png";

function IPadFourRows() {
  return (
    <div className="ipadFourRowsDiv">
      <div className="ipadFourRowsTitleDiv">
        <h1>
          Welcome to the<br></br> new generation of iPad.
        </h1>
      </div>
      <div className="ipadFourRowsIpadProDiv">
        <div>
          <img src={ipadProImage}></img>
        </div>
        <div>
          <h1>iPad Pro</h1>
          <p>The most advanced iPad ever.</p>
          <span>Starting at A$1,229</span>
          <br></br>
          <button>Buy</button>
          <br></br>
          <a href="/">Learn more ></a>
        </div>
      </div>
      <div className="ipadFourRowsIpadAirDiv">
        <img src={ipadAirImage}></img>
        <div className="ipadFourRowsIpadAirTextDiv">
          <h1>iPad Air</h1>
          <p>Incredible power. Incredible value.</p>
          <span>Starting at A$779</span>
          <br></br>
          <button>Buy</button>
          <br></br>
          <a href="/">Learn more ></a>
        </div>
      </div>
      <div className="ipadFourRowsIpadDiv">
        <div>
          <img src={ipadImage}></img>
        </div>
        <div>
          <h1>iPad</h1>
          <p>Our most popular iPad.</p>
          <span>Starting at A$529</span>
          <br></br>
          <button>Buy</button>
          <br></br>
          <a href="/">Learn more ></a>
        </div>
      </div>
      <div className="ipadFourRowsIpadMiniDiv">
        <div>
          <img src={ipadMiniImage}></img>
        </div>
        <div>
          <h1>iPad mini</h1>
          <p>
            Small in size.<br></br> Big on capability.
          </p>
          <span>Starting at A$599</span>
          <br></br>
          <button>Buy</button>
          <br></br>
          <a href="/">Learn more ></a>
        </div>
      </div>
    </div>
  );
}

export default IPadFourRows;
