import React from "react";
import "../../css/iPadFourIpadsCss.css";
import ipadProImage from "../../images/forIpad/ipad_ipadProCompare.png";
import ipadImage from "../../images/forIpad/ipad_ipadCompare.png";
import ipadAirImage from "../../images/forIpad/ipad_ipadAirCompare.png";
import ipadMiniImage from "../../images/forIpad/ipad_ipadMiniCompare.png";

function IPadFourIpads() {
  return (
    <div className="iPadFourIpadsDiv">
      <div className="iPadFourIpadsEdgeDiv">
        <div className="iPadFourIpadsTitleDiv">
          <h1>Compare iPad models.</h1>
        </div>
        <br></br>
        <div className="iPadFourIpadsEachDiv">
          <img src={ipadProImage}></img>
          <div className="iPadFourIpadsEachTextDiv">
            <h4>iPad Pro</h4>
            <h5>Starting at A$1,229</h5>
            <br></br>
            <span>
              12.9-inch and 11-inch Liquid Retina display<br></br>A12X Bionic
              chip<br></br>Face ID<br></br>Up to 1TB of storage<br></br>Support
              for Apple Pencil (2nd generation)<br></br>Support for Smart
              Keyboard Folio
            </span>
          </div>
        </div>
        <div className="iPadFourIpadsEachDiv">
          <img src={ipadAirImage}></img>
          <div className="iPadFourIpadsEachTextDiv">
            <h4>iPad Air</h4>
            <h5>Starting at A$779</h5>
            <br></br>
            <span>
              10.5-inch Retina display<br></br>A12 Bionic chip<br></br>Touch ID
              <br></br>Up to 256GB of storage<br></br>Support for Apple Pencil
              (1st generation)<br></br>Support for Smart Keyboard
            </span>
          </div>
        </div>
        <div className="iPadFourIpadsEachDiv">
          <img src={ipadImage}></img>
          <div className="iPadFourIpadsEachTextDiv">
            <h4>iPad</h4>
            <h5>Starting at A$529</h5>
            <br></br>
            <span>
              10.2-inch Retina display<br></br>A10 Fusion chip<br></br>Touch ID
              <br></br>Up to 128GB of storage<br></br>Support for Apple Pencil
              (1st generation)<br></br>Support for Smart Keyboard
            </span>
          </div>
        </div>
        <div className="iPadFourIpadsEachDiv">
          <img src={ipadMiniImage}></img>
          <div className="iPadFourIpadsEachTextDiv">
            <h4>iPad mini</h4>
            <h5>Starting at A$599</h5>
            <br></br>
            <span>
              7.9-inch Retina display<br></br>A12 Bionic chip<br></br>Touch ID
              <br></br>Up to 256GB of storage<br></br>Support for Apple Pencil
              (1st generation)
            </span>
          </div>
        </div>
        <div className="iPadFourIpadsBottomLinkDiv">
          <a href="/">Find the right iPad for you ></a>
        </div>
      </div>
    </div>
  );
}

export default IPadFourIpads;
