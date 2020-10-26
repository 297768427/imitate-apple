import React from "react";
import "../../css/homeIphone11Css.css";
import multiIphone11 from "../../images/multiple-iphone11pro.png";

function HomeIphone11() {
  const toIphonePage = () => {
    window.location.href = "/iPhone";
  };

  return (
    <div style={{ cursor: "pointer" }} onClick={() => toIphonePage()}>
      <div className="homeIphone11_text_div">
        <h1>iPhone11</h1>
        <h4>Just right amount of everything.</h4>
        <a href="/" style={{ marginRight: "12px" }}>
          Learn more >
        </a>{" "}
        <a href="/" style={{ marginLeft: "12px" }}>
          Buy >
        </a>
      </div>
      <div>
        <img src={multiIphone11} style={{ width: "100%" }}></img>
      </div>
    </div>
  );
}

export default HomeIphone11;
