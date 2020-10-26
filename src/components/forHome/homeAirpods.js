import React from "react";
import "../../css/homeAirpodsCss.css";
import homeAirPodsImage from "../../images/homeAirPods.jpg";

function HomeAirPods() {
  const toAirpodsPage = () => {
    window.location.href = "/";
  };
  return (
    <div className="homeAirpodsDiv" onClick={() => toAirpodsPage()}>
      <div className="homeAirpodsTextDiv">
        <br></br>
        <br></br>
        <br></br>
        <h1>AirPods Pro</h1>
        <h4>Magic like you’ve never heard.</h4>
        <a href="/" style={{ marginRight: "12px" }}>
          Learn more >
        </a>{" "}
        <a href="/" style={{ marginLeft: "12px" }}>
          Buy >
        </a>
      </div>
      <div className="homeAirpodsImageDiv">
        <img src={homeAirPodsImage}></img>
      </div>
    </div>
  );
}

export default HomeAirPods;
