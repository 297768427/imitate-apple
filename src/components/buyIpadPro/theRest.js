import React, { useRef, useState } from "react";
import "../../css/buyIpadPro_restCss.css";
import one from "../../images/forBuyIpad/buyIpad_theOne.png";
import two from "../../images/forBuyIpad/buyIpad_theTwo.png";
import three from "../../images/forBuyIpad/buyIpad_theThree.png";
import four from "../../images/forBuyIpad/buyIpad_theFour.png";
import five from "../../images/forBuyIpad/buyIpad_theFive.png";
import inBox from "../../images/forBuyIpad/buyIpad_inBox.png";
import pencil from "../../images/forBuyIpad/buyIpad_pencil.png";
import board from "../../images/forBuyIpad/buyIpad_board.png";

function TheRest() {
  const [y, setY] = useState(0);
  const [bigShow, setBigShow] = useState(false);
  const [number, setNumber] = useState(1);
  const [imageX, setImageX] = useState(0);

  let divRef = useRef(null);

  const clickImages = () => {
    let yPosition = divRef.getBoundingClientRect().top - 50;
    setY(yPosition);
    setBigShow(true);
  };

  const clickCross = () => {
    setTimeout(() => {
      setBigShow(false);
      setImageX(0);
    }, 10);
  };

  const numberUp = () => {
    let newImageX = imageX - 530;
    if (newImageX > -2913) {
      setImageX(newImageX);
    }
  };

  const numberDown = () => {
    let newImageX = imageX + 530;
    if (newImageX < 530) {
      setImageX(newImageX);
    }
  };

  window.addEventListener("scroll", () => {
    setBigShow(false);
    setImageX(0);
  });

  return (
    <div>
      <div className="buyIpadProRestDiv" ref={e => (divRef = e)}>
        <div
          className={
            bigShow ? "buyIpadProRestFirstDivWide" : "buyIpadProRestFirstDiv"
          }
          style={{ top: bigShow ? -y + "px" : "" }}
          onClick={() => clickImages()}
        >
          <div
            className="buyIpadProRestFirstDivWideCross"
            style={{ display: bigShow ? "" : "none" }}
            onClick={() => clickCross()}
          >
            &#10005;
          </div>
          <div
            className="buyIpadProRestFirstDivWideLeft"
            style={{ display: bigShow ? "" : "none" }}
            onClick={() => numberDown()}
          >
            &#10094;
          </div>
          <div
            className="buyIpadProRestFirstDivWideRight"
            style={{ display: bigShow ? "" : "none" }}
            onClick={() => numberUp()}
          >
            &#10095;
          </div>
          <img
            src={one}
            style={{ marginLeft: bigShow ? imageX + "px" : "" }}
          ></img>
          <img src={two}></img>
          <img src={three}></img>
          <img src={four}></img>
          <img src={five}></img>
        </div>
      </div>
      <div className="buyIpadProRestSecondDiv">
        <h1>What’s in the Box</h1>
        <img src={inBox}></img>
        <br></br>
        <span>iPad Pro</span>
        <span>USB-C Charge Cable</span>
        <span>18W USB-C Power Adapter</span>
      </div>
      <div className="buyIpadProRestThirdDiv">
        <div className="buyIpadProRestThirdPencilDiv">
          <div className="buyIpadProRestThirdPencilImageDiv">
            <img src={pencil}></img>
          </div>
          <div className="buyIpadProRestThirdPencilTextDiv">
            <h1>Apple Pencil</h1>
            <h1>(2nd generation)</h1>
            <a href="/">Lean more ></a>
            <a href="/">Buy ></a>
          </div>
        </div>
        <div className="buyIpadProRestThirdBoardDiv">
          <div className="buyIpadProRestThirdBoardImageDiv">
            <img src={board}></img>
          </div>
          <div className="buyIpadProRestThirdBoardTextDiv">
            <h1>Smart Keyboard Folio</h1>
            <a href="/">Lean more ></a>
            <a href="/">Buy ></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheRest;
