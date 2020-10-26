import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import "../../css/iPhone11ProNinthSectorCss.css";
import faceImage from "../../images/forIphone11Pro/iPhone11Pro_face.png";
import image1 from "../../images/forIphone11Pro/iPhone11Pro_model1.png";
import image2 from "../../images/forIphone11Pro/iPhone11Pro_model2.png";
import image3 from "../../images/forIphone11Pro/iPhone11Pro_model3.png";

function IPhone11ProNinthSector() {
  let faceRef = useRef(null);
  let model1Ref = useRef(null);
  let model2Ref = useRef(null);
  let model3Ref = useRef(null);

  ScrollMagicPluginGsap(ScrollMagic, TweenMax);

  let controller = new ScrollMagic.Controller();

  useEffect(() => {
    const animationOne = TweenMax.to(faceRef, 1, {
      css: { filter: "grayscale(100%)" }
    });

    const animationTwo = TweenMax.to(model1Ref, 0.7, {
      css: { "margin-top": "40px" }
    });

    const animationThree = TweenMax.to(model2Ref, 0.7, {
      css: { "margin-top": "40px" }
    });

    const animationFour = TweenMax.to(model3Ref, 0.7, {
      css: { "margin-top": "40px" }
    });

    let sceneOne = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: faceRef,
      triggerHook: 0
    })
      .setTween(animationOne)
      .addTo(controller);

    let sceneTwo = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: model1Ref,
      triggerHook: 1
    })
      .setTween(animationTwo)
      .addTo(controller);

    let sceneThree = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: model2Ref,
      triggerHook: 1
    })
      .setTween(animationThree)
      .addTo(controller);

    let sceneFour = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: model3Ref,
      triggerHook: 1
    })
      .setTween(animationFour)
      .addTo(controller);
  }, []);

  return (
    <div className="iPhone11ProNinthSectorDiv">
      <div className="iPhone11ProNinthSectorTextDiv">
        <h1>Portrait mode</h1>
        <h1>Power to the portrait.</h1>
        <span>
          With three cameras working together, you can fit more in your
          portraits than ever. iOS 13 adds the High‑Key Light Mono effect for
          studio‑style monochromes. And Portrait Lighting lets you control the
          intensity of light to flatter your subject — just like you would in a
          studio. How beautiful is that?
        </span>
      </div>
      <div className="iPhone11ProNinthSectorFaceDiv">
        <img src={faceImage} ref={e => (faceRef = e)}></img>
      </div>
      <div className="iPhone11ProNinthSectorModelsDiv">
        <div
          className="iPhone11ProNinthSectorModelsEachDiv"
          ref={q => {
            model1Ref = q;
          }}
        >
          <img src={image1}></img>
        </div>
        <div
          className="iPhone11ProNinthSectorModelsEachDiv"
          ref={w => {
            model2Ref = w;
          }}
        >
          {" "}
          <img src={image2}></img>
        </div>
        <div
          className="iPhone11ProNinthSectorModelsEachDiv"
          ref={r => {
            model3Ref = r;
          }}
        >
          {" "}
          <img src={image3}></img>
        </div>
      </div>
    </div>
  );
}

export default IPhone11ProNinthSector;
