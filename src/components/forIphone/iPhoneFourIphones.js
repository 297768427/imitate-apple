import React from "react";
import "../../css/iPhoneFourIphonesCss.css";
import iphone11ProImage from "../../images/forIphone/fourIphones_11Pro.png";
import iphone11Image from "../../images/forIphone/fourIphones_11.png";
import iphoneXRImage from "../../images/forIphone/fourIphones_XR.png";
import iphone8Image from "../../images/forIphone/fourIphones_8.png";

function FourIphones() {
  return (
    <div className="iPhoneFourIphonesDiv">
      <div className="iPhoneFourIphonesTitleDiv">
        <h1>Which iPhone is right for you?</h1>
      </div>
      <div className="iPhoneFourIphonesTypeDiv">
        <div className="iPhoneFourIphonesEachDiv">
          <div className="iPhoneFourIphonesEachImageDiv">
            <img src={iphone11ProImage}></img>
          </div>
          <div className="iPhoneFourIphonesEachTextDiv">
            <h4>iPhone 11 Pro</h4>
            <span>
              All-new triple-camera system (Ultra Wide, Wide, Telephoto)
            </span>
            <br></br>
            <br></br>
            <span>Up to 20 hours of video playback</span>
            <br></br>
            <br></br>
            <span>
              Water-resistant to a depth of 4 metres for up to 30 minutes
            </span>
            <br></br>
            <br></br>
            <span>5.8- or 6.5-inch Super Retina XDR display</span>
          </div>
          <div className="iPhoneFourIphonesEachBottomDiv">
            <br></br>
            <button>Buy</button>
            <br></br>
            <br></br>
            <a href="/">Learn more ></a>
          </div>
        </div>
        <div className="iPhoneFourIphonesEachDiv">
          <div className="iPhoneFourIphonesEachImageDiv">
            <img src={iphone11Image}></img>
          </div>
          <div className="iPhoneFourIphonesEachTextDiv">
            <h4>iPhone 11</h4>
            <span>All-new dual-camera system (Ultra Wide, Wide)</span>
            <br></br>
            <br></br>
            <span>Up to 17 hours of video playback </span>
            <br></br>
            <br></br>
            <span>
              Water-resistant to a depth of 2 metres for up to 30 minutes
            </span>
            <br></br>
            <br></br>
            <span>6.1-inch Liquid Retina HD display</span>
          </div>
          <div className="iPhoneFourIphonesEachBottomDiv">
            <br></br>
            <button>Buy</button>
            <br></br>
            <br></br>
            <a href="/">Learn more ></a>
          </div>
        </div>
        <div className="iPhoneFourIphonesEachDiv">
          <div className="iPhoneFourIphonesEachImageDiv">
            <img src={iphoneXRImage}></img>
          </div>
          <div className="iPhoneFourIphonesEachTextDiv">
            <h4>iPhone XR</h4>
            <span>Single-camera system (Wide)</span>
            <br></br>
            <br></br>
            <span>Up to 16 hours of video playback</span>
            <br></br>
            <br></br>
            <span>
              Water-resistant to a depth of 1 metre for up to 30 minutes
            </span>
            <br></br>
            <br></br>
            <span>6.1-inch Liquid Retina HD display</span>
          </div>
          <div className="iPhoneFourIphonesEachBottomDiv">
            <br></br>
            <button>Buy</button>
            <br></br>
            <br></br>
            <a href="/">Learn more ></a>
          </div>
        </div>
        <div className="iPhoneFourIphonesEachDiv">
          <div className="iPhoneFourIphonesEachImageDiv">
            <img src={iphone8Image}></img>
          </div>
          <div className="iPhoneFourIphonesEachTextDiv">
            <h4>iPhone 8</h4>
            <span>
              Single-camera (Wide) or dual-camera (Wide, Telephoto) system
            </span>
            <br></br>
            <br></br>
            <span>Up to 14 hours of video playback</span>
            <br></br>
            <br></br>
            <span>
              Water-resistant to a depth of 1 metre for up to 30 minutes
            </span>
            <br></br>
            <br></br>
            <span>4.7- or 5.5-inch Retina HD display</span>
          </div>
          <div className="iPhoneFourIphonesEachBottomDiv">
            <br></br>
            <button>Buy</button>
            <br></br>
            <br></br>
            <a href="/">Learn more ></a>
          </div>
        </div>
      </div>
      <div className="iPhoneFourIphonesBottomLinkDiv">
        <a href="/">Compare more iPhone models ></a>
      </div>
    </div>
  );
}

export default FourIphones;
