import React, { useEffect, useRef } from "react";
import { TweenMax } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import "../../css/iPhone11ProSeventhSectorCss.css";
import girl from "../../images/forIphone11Pro/iPhone11Pro_girl.png";
import skate from "../../images/forIphone11Pro/iPhone11Pro_skate.png";
import building from "../../images/forIphone11Pro/iPhone11Pro_building.png";
import backGroundGirl from "../../images/forIphone11Pro/iPhone11Pro_backGroundGirl.png";
import landscape from "../../images/forIphone11Pro/iPhone11Pro_landscape.png";
import bNw from "../../images/forIphone11Pro/iPhone11Pro_bNw.png";

function IPhone11ProSeventhSector() {
  let oneRef = useRef(null);
  let twoRef = useRef(null);
  let threeRef = useRef(null);

  ScrollMagicPluginGsap(ScrollMagic, TweenMax);
  let controller = new ScrollMagic.Controller();

  useEffect(() => {
    const animationOne = TweenMax.to(oneRef, 0.7, {
      css: { "margin-top": "0px" },
      ease: "circ"
    });

    const animationTwo = TweenMax.to(twoRef, 0.7, {
      css: { "margin-top": "50px" },
      ease: "circ"
    });

    const animationThree = TweenMax.to(threeRef, 0.7, {
      css: { "margin-top": "50px" },
      ease: "circ"
    });

    let sceneOne = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: oneRef,
      triggerHook: 1
    })
      .setTween(animationOne)
      .addTo(controller);

    let sceneTwo = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: twoRef,
      triggerHook: 1
    })
      .setTween(animationTwo)
      .addTo(controller);

    let sceneThree = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: threeRef,
      triggerHook: 1
    })
      .setTween(animationThree)
      .addTo(controller);
  }, []);

  return (
    <div className="iPhone11ProSeventhSectorDiv">
      <div className="iPhone11ProSeventhSectorOneDiv">
        <img src={skate} ref={skate => (oneRef = skate)}></img>
      </div>
      <div
        className="iPhone11ProSeventhSectorTwoDiv"
        ref={two => (twoRef = two)}
      >
        <div className="iPhone11ProSeventhSectorTwoEachDiv">
          <img src={girl}></img>
        </div>
        <div className="iPhone11ProSeventhSectorTwoEachDiv">
          <img src={building}></img>
        </div>
      </div>
      <div
        className="iPhone11ProSeventhSectorThreeDiv"
        ref={three => (threeRef = three)}
      >
        <img src={landscape}></img>
      </div>
    </div>
  );
}

export default IPhone11ProSeventhSector;
