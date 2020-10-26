import React from "react";
import "../../css/iPhone11ProSecondSectorCss.css";
import imageOne from "../../images/forIphone11Pro/iPhone11Pro_threeOne.png";
import imageTwo from "../../images/forIphone11Pro/iPhone11Pro_threeTwo.png";
import imageThree from "../../images/forIphone11Pro/iPhone11Pro_threeThree.png";
import imageRight from "../../images/forIphone11Pro/iPhone11Pro_right.png";

function IPhone11ProSecondSector() {
  return (
    <div className="iPhone11ProSecondSectorDiv">
      <div className="iPhone11ProSecondSectorThreeImagesDiv">
        <div className="iPhone11ProSecondSectorThreeImagesEachDiv">
          <img src={imageOne}></img>
        </div>
        <div className="iPhone11ProSecondSectorThreeImagesEachDiv">
          <img src={imageTwo}></img>
        </div>
        <div className="iPhone11ProSecondSectorThreeImagesEachDiv">
          <img src={imageThree}></img>
        </div>
      </div>
      <div className="iPhone11ProSecondSectorLeftDiv">
        <div className="iPhone11ProSecondSectorLeftTextDiv">
          <h1>Take a closer look.</h1>
          <p>
            Two sizes. Four finishes.<br></br> Stainless steel and glass design.
          </p>
          <a href="/">
            <button>View the gallery ></button>
          </a>
        </div>
      </div>
      <div className="iPhone11ProSecondSectorRightDiv">
        <img src={imageRight}></img>
      </div>
    </div>
  );
}

export default IPhone11ProSecondSector;
