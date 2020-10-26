import React, { useEffect, useRef } from "react";
import "../../css/iPhone11ProThirdSectorCss.css";
import ScrollMagic from "scrollmagic";
import { TweenMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import theImage from "../../images/forIphone11Pro/iPhone11Pro_rotate.png";
import big1Image from "../../images/forIphone11Pro/iPhone11Pro_big1.png";
import big2Image from "../../images/forIphone11Pro/iPhone11Pro_big2.png";

function IPhone11ProThirdSector() {
  let imageRef = useRef(null);
  let textRef = useRef(null);
  let triggerDiv = useRef(null);

  ScrollMagicPluginGsap(ScrollMagic, TweenMax);

  let controller = new ScrollMagic.Controller();

  useEffect(() => {
    const animation = TweenMax.fromTo(
      imageRef,
      4,
      { css: { rotation: 0, filter: "brightness(0%)" } },
      { css: { rotation: 20, filter: "brightness(60%)" } }
    );

    const textAnimation = TweenMax.fromTo(
      textRef,
      4,
      { css: { bottom: "130px", opacity: 0 } },
      { css: { bottom: "210px", opacity: 1 } }
    );
    let scene = new ScrollMagic.Scene({
      duration: 1600,
      triggerElement: triggerDiv,
      triggerHook: 0
    })
      .setTween(animation)
      .addTo(controller);

    let sceneText = new ScrollMagic.Scene({
      duration: 300,
      offset: 390,
      triggerElement: triggerDiv,
      triggerHook: 0
    })
      .setTween(textAnimation)
      .addTo(controller);
  }, []);

  return (
    <div className="iPhone11ProThirdSectorDiv" ref={el => (triggerDiv = el)}>
      <div className="iPhone11ProThirdSectorChildDiv">
        <div className="iPhone11ProThirdSectorImageDiv">
          <img src={theImage} ref={e => (imageRef = e)} id="rotateImage"></img>
          <h1 ref={text => (textRef = text)}>
            Pro camera system<br></br>
            <span id="iPhone11ProThirdSectorWhiteText">
              We've three-upped<br></br>ourselves.
            </span>
          </h1>
        </div>
        <div className="iPhone11ProThirdSectorExtraDiv">
          <img src={big1Image}></img>
        </div>
      </div>
      <div className="iPhone11ProThirdSectorLastImageDiv">
        <img src={big2Image}></img>
      </div>
    </div>
  );
}

export default IPhone11ProThirdSector;
