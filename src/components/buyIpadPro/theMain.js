import React, { useState } from "react";
import "../../css/buyIpadPro_mainCss.css";
import start from "../../images/forBuyIpad/buyIpad_start.png";
import size11 from "../../images/forBuyIpad/buyIpad_11.png";
import size12 from "../../images/forBuyIpad/buyIpad_12.png";
import size11_light from "../../images/forBuyIpad/buyIpad_11_light.png";
import size11_dark from "../../images/forBuyIpad/buyIpad_11_dark.png";
import size12_light from "../../images/forBuyIpad/buyIpad_12_light.png";
import size12_dark from "../../images/forBuyIpad/buyIpad_12_dark.png";
import redApple from "../../images/forBuyIpad/buyIpad_redApple.png";
import heart from "../../images/forBuyIpad/buyIpad_heart.png";

function TheMain() {
  const [image, setImage] = useState(start);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [storage, setStorage] = useState("");
  const [wifi, setWifi] = useState("");
  const [sizeShow, setSizeShow] = useState(true);
  const [colorShow, setColorShow] = useState(true);
  const [storageShow, setStorageShow] = useState(true);
  const [connectivityShow, setConnectivityShow] = useState(true);

  const choose11 = () => {
    setSize("11");
    setSizeShow(false);
    if (!color) {
      setImage(size11);
    } else if (color === "light") {
      setImage(size11_light);
    } else if (color === "dark") {
      setImage(size11_dark);
    }
  };

  const choose12 = () => {
    setSize("12.9");
    setSizeShow(false);
    if (!color) {
      setImage(size12);
    } else if (color === "light") {
      setImage(size12_light);
    } else if (color === "dark") {
      setImage(size12_dark);
    }
  };

  const showSize = () => {
    setSizeShow(true);
  };

  const showColor = () => {
    setColorShow(true);
  };

  const showStorage = () => {
    setStorageShow(true);
  };

  const showConnectivity = () => {
    setConnectivityShow(true);
  };

  const chooseColorLight = () => {
    setColor("light");
    if (size === "11") {
      setImage(size11_light);
    } else if (size === "12.9") {
      setImage(size12_light);
    }
    setColorShow(false);
  };

  const chooseColorDark = () => {
    setColor("dark");
    if (size === "11") {
      setImage(size11_dark);
    } else if (size === "12.9") {
      setImage(size12_dark);
    }
    setColorShow(false);
  };

  const storage64 = () => {
    setStorage("64GB");
    setStorageShow(false);
  };
  const storage256 = () => {
    setStorage("256GB");
    setStorageShow(false);
  };
  const storage512 = () => {
    setStorage("512GB");
    setStorageShow(false);
  };
  const storage1 = () => {
    setStorage("1TB");
    setStorageShow(false);
  };

  const chooseWifi = () => {
    setWifi("Wi-Fi");
    setConnectivityShow(false);
  };

  const chooseCellular = () => {
    setWifi("Wi-Fi + Cellular");
    setConnectivityShow(false);
  };

  return (
    <div className="buyIpadProMainDiv">
      <div className="buyIpadProMainTopDiv">
        <span>
          Trade in your eligible iPad and you could get credit towards a new
          one.
          <a href="/"> Learn more about Apple Trade In ></a>
        </span>
      </div>
      <div className="buyIpadProMainContentDiv">
        <div className="buyIpadProMainContentImageDiv">
          <img src={image}></img>
        </div>
        <div className="buyIpadProMainContentOptionsDiv">
          <h1>Buy iPad Pro</h1>
          <p>Get free delivery on iPad. And free returns.</p>
          <div
            className="buyIpadProMainContentOptionsSizeDiv"
            style={{ display: sizeShow ? "block" : "none" }}
          >
            <h5>Model</h5>
            <div
              className="buyIpadProMainContentOptionsSizeEachDiv"
              onClick={() => choose11()}
              style={{
                boxShadow: size === "11" ? "0 0 0 2px #c1dffe" : "",
                border: size === "11" ? "1px solid #0070c9" : ""
              }}
            >
              <span>11-inch display</span>
              <span>From A$1,299</span>
            </div>
            <div
              className="buyIpadProMainContentOptionsSizeEachDiv"
              onClick={() => choose12()}
              style={{
                boxShadow: size === "12.9" ? "0 0 0 2px #c1dffe" : "",
                border: size === "12.9" ? "1px solid #0070c9" : ""
              }}
            >
              <span>12.9-inch display</span>
              <span>From A$1,529</span>
            </div>
          </div>
          <div
            className="buyIpadProMainContentOptionsResultDiv"
            style={{ display: sizeShow ? "none" : "block" }}
          >
            <span
              onClick={() => {
                showSize();
              }}
            >
              {size}-inch iPad Pro
            </span>
            <span
              onClick={() => {
                showSize();
              }}
            >
              Change
            </span>
          </div>
          <div
            className="buyIpadProMainContentOptionsColorDiv"
            style={{
              display: colorShow ? "block" : "none",
              opacity: size ? "1" : "0.4",
              pointerEvents: size ? "" : "none"
            }}
          >
            <h5>Finish</h5>
            <div
              className="buyIpadProMainContentOptionsColorEachDiv"
              onClick={() => chooseColorDark()}
              style={{
                boxShadow: color === "dark" ? "0 0 0 2px #c1dffe" : "",
                border: color === "dark" ? "1px solid #0070c9" : ""
              }}
            >
              <div className="buyIpadProMainContentOptionsColorDark"></div>
              <span>Space Grey</span>
            </div>
            <div
              className="buyIpadProMainContentOptionsColorEachDiv"
              onClick={() => chooseColorLight()}
              style={{
                boxShadow: color === "light" ? "0 0 0 2px #c1dffe" : "",
                border: color === "light" ? "1px solid #0070c9" : ""
              }}
            >
              <div className="buyIpadProMainContentOptionsColorLight"></div>
              <span>Silver</span>
            </div>
          </div>
          <div
            className="buyIpadProMainContentOptionsResultDiv"
            style={{ display: colorShow ? "none" : "block" }}
          >
            <span
              onClick={() => {
                showColor();
              }}
            >
              {color === "light" ? "Silver" : "Space Grey"}
            </span>
            <span
              onClick={() => {
                showColor();
              }}
            >
              Change
            </span>
          </div>
          <div
            className="buyIpadProMainContentOptionsStorageDiv"
            style={{
              display: storageShow ? "block" : "none",
              opacity: color ? "1" : "0.4",
              pointerEvents: color ? "" : "none"
            }}
          >
            <h5>Storage</h5>
            <div
              className="buyIpadProMainContentOptionsStorageEachDiv"
              onClick={() => storage64()}
              style={{
                boxShadow: storage === "64GB" ? "0 0 0 2px #c1dffe" : "",
                border: storage === "64GB" ? "1px solid #0070c9" : ""
              }}
            >
              <span className="buyIpadProMainContentOptionsStorageEachBigSpan">
                64
              </span>
              <span className="buyIpadProMainContentOptionsStorageEachSmallSpan">
                GB
              </span>
              <br></br>
              <span>From A$1,229</span>
            </div>
            <div
              className="buyIpadProMainContentOptionsStorageEachDiv"
              onClick={() => storage256()}
              style={{
                boxShadow: storage === "256GB" ? "0 0 0 2px #c1dffe" : "",
                border: storage === "256GB" ? "1px solid #0070c9" : ""
              }}
            >
              <span className="buyIpadProMainContentOptionsStorageEachBigSpan">
                256
              </span>
              <span className="buyIpadProMainContentOptionsStorageEachSmallSpan">
                GB
              </span>
              <br></br>
              <span>From A$1,449</span>
            </div>
            <div
              className="buyIpadProMainContentOptionsStorageEachDiv"
              onClick={() => storage512()}
              style={{
                boxShadow: storage === "512GB" ? "0 0 0 2px #c1dffe" : "",
                border: storage === "512GB" ? "1px solid #0070c9" : ""
              }}
            >
              <span className="buyIpadProMainContentOptionsStorageEachBigSpan">
                512
              </span>
              <span className="buyIpadProMainContentOptionsStorageEachSmallSpan">
                GB
              </span>
              <br></br>
              <span>From A$1,749</span>
            </div>
            <div
              className="buyIpadProMainContentOptionsStorageEachDiv"
              onClick={() => storage1()}
              style={{
                boxShadow: storage === "1TB" ? "0 0 0 2px #c1dffe" : "",
                border: storage === "1TB" ? "1px solid #0070c9" : ""
              }}
            >
              <span className="buyIpadProMainContentOptionsStorageEachBigSpan">
                1
              </span>
              <span className="buyIpadProMainContentOptionsStorageEachSmallSpan">
                TB
              </span>
              <br></br>
              <span>From A$2,049</span>
            </div>
          </div>
          <div
            className="buyIpadProMainContentOptionsResultDiv"
            style={{ display: storageShow ? "none" : "block" }}
          >
            <span
              onClick={() => {
                showStorage();
              }}
            >
              {storage}
            </span>
            <span
              onClick={() => {
                showStorage();
              }}
            >
              Change
            </span>
          </div>
          <div
            className="buyIpadProMainContentOptionsConnectDiv"
            style={{
              display: connectivityShow ? "block" : "none",
              opacity: storage ? "1" : "0.4",
              pointerEvents: storage ? "" : "none"
            }}
          >
            <h5>Connectivity</h5>
            <div
              className="buyIpadProMainContentOptionsConnectEachDiv"
              onClick={() => chooseWifi()}
              style={{
                boxShadow: wifi === "Wi-Fi" ? "0 0 0 2px #c1dffe" : "",
                border: wifi === "Wi-Fi" ? "1px solid #0070c9" : ""
              }}
            >
              <span>Wi-Fi</span>
              <br></br>
              <span>A$2,349.00</span>
            </div>
            <div
              className="buyIpadProMainContentOptionsConnectEachDiv"
              onClick={() => chooseCellular()}
              style={{
                boxShadow:
                  wifi === "Wi-Fi + Cellular" ? "0 0 0 2px #c1dffe" : "",
                border: wifi === "Wi-Fi + Cellular" ? "1px solid #0070c9" : ""
              }}
            >
              <span>Wi-Fi + Cellular</span>
              <br></br>
              <span>A$2,569.00</span>
            </div>
          </div>
          <div
            className="buyIpadProMainContentOptionsResultDiv"
            style={{ display: connectivityShow ? "none" : "block" }}
          >
            <span
              onClick={() => {
                showConnectivity();
              }}
            >
              {wifi}
            </span>
            <span
              onClick={() => {
                showConnectivity();
              }}
            >
              Change
            </span>
          </div>
          <div
            className="buyIpadProMainContentOptionsFinalDiv"
            style={{
              opacity: wifi ? "1" : "0.4",
              pointerEvents: wifi ? "" : "none"
            }}
          >
            <h1>A$1,880.00</h1>
            <span>Includes GST of approx. A$152.00.*</span>
            <br></br>
            <a href="/">
              0% interest for 6, 12 or 24 months. Min. spend applies.
            </a>
            <hr></hr>
            <h5>Add ApppleCare+</h5>
            <img src={redApple}></img>
            <div className="buyIpadProMainContentOptionsFinalBesideRedDiv">
              <span>AppleCare+</span>
              <br></br>
              <span>A$179.00</span>
              <p>
                Get up to two years of tech support and accidental damage
                coverage.
              </p>
            </div>
            <span id="buyIpadProMainContentOptionsFinalAdd">Add</span>
            <button id="buyIpadProMainContentOptionsFinalButton">
              Continue
            </button>
            <img id="buyIpadProMainContentOptionsFinalHeart" src={heart}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheMain;
