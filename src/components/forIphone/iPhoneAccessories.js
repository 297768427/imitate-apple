import React from "react";
import "../../css/iPhoneAccessoriesCss.css";
import accessories1 from "../../images/forIphone/iphone_accessories1.png";
import accessories2 from "../../images/forIphone/iphone_accessories2.png";
import accessories3 from "../../images/forIphone/iphone_accessories3.png";

function IPhoneAccessories() {
  return (
    <div className="iPhoneAccessoriesDiv">
      <div className="iPhoneAccessoriesTextDiv">
        <h3>See why there’s no better place to buy.</h3>
        <span>
          Have questions about carriers, payment options or<br></br> anything
          else iPhone? Just say the word.
        </span>
        <br></br>
        <a href="/">Learn more ></a>
      </div>
      <div className="iPhoneAccessoriesTitleDiv">
        <h1>Featured Accessories</h1>
      </div>
      <div className="iPhoneAccessoriesContentDiv">
        <div className="iPhoneAccessoriesContentEachDiv">
          <div className="iPhoneAccessoriesContentEachImageDiv">
            <img src={accessories1}></img>
          </div>
          <div className="iPhoneAccessoriesContentEachTextDiv">
            <span>new</span>
            <br></br>
            <a href="/">
              iPhone 11 Pro <br></br>Leather Case
            </a>
          </div>
        </div>
        <div className="iPhoneAccessoriesContentEachDiv">
          <div className="iPhoneAccessoriesContentEachImageDiv">
            <img src={accessories2}></img>
          </div>
          <div className="iPhoneAccessoriesContentEachTextDiv">
            <span>new</span>
            <br></br>
            <a href="/">
              iPhone 11 <br></br>Silicone Case
            </a>
          </div>
        </div>
        <div className="iPhoneAccessoriesContentEachDiv">
          <div className="iPhoneAccessoriesContentEachImageDiv">
            <img src={accessories3}></img>
          </div>
          <div className="iPhoneAccessoriesContentEachTextDiv">
            <span>new</span>
            <br></br>
            <a href="/">AirPods Pro</a>
          </div>
        </div>
      </div>
      <div className="iPhoneAccessoriesBottomLinkDiv">
        <a href="/">Shop all iPhone accessories ></a>
      </div>
    </div>
  );
}

export default IPhoneAccessories;
