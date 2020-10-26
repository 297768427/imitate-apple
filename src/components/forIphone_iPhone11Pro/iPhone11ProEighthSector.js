import React, { useEffect, useRef } from "react";
import { TweenMax } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import "../../css/iPhone11ProEighthSectorCss.css";
import theImage from "../../images/forIphone11Pro/iPhone11Pro_bNw.png";
import backImage from "../../images/forIphone11Pro/iPhone11Pro_backGroundGirl.png";
import nmOff from "../../images/forIphone11Pro/iPhone11Pro_nmOff.png";
import nmOn from "../../images/forIphone11Pro/iPhone11Pro_nmOn.png";

function IPhone11ProEighthSector() {
  let oneRef = useRef(null);
  let twoRef = useRef(null);
  let twoTriggerRef = useRef(null);

  ScrollMagicPluginGsap(ScrollMagic, TweenMax);
  let controller = new ScrollMagic.Controller();

  useEffect(() => {
    const animationOne = TweenMax.to(oneRef, 0.7, {
      css: { "margin-top": "40px" },
      ease: "circ"
    });

    const animationTwo = TweenMax.to(twoRef, 2, {
      css: { filter: "brightness(100%)" }
    });

    let sceneOne = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: oneRef,
      triggerHook: 1
    })
      .setTween(animationOne)
      .addTo(controller);

    let sceneTwo = new ScrollMagic.Scene({
      duration: 1000,
      triggerElement: twoTriggerRef,
      triggerHook: 0
    })
      .setTween(animationTwo)
      .addTo(controller);
  }, []);

  return (
    <div className="iPhone11ProEighthSectorDiv">
      <div className="iPhone11ProEighthSectorBigOneDiv">
        <div
          className="iPhone11ProEighthSectorSmallOneDiv"
          ref={e => (twoTriggerRef = e)}
        >
          <img src={theImage} ref={b => (oneRef = b)}></img>
        </div>
        <div className="iPhone11ProEighthSectorSmallTwoDiv">
          <h1>Night mode</h1>
          <h1>High tech meets low light.</h1>
        </div>
        <div className="iPhone11ProEighthSectorSmallThreeDiv">
          <img src={backImage} ref={b => (twoRef = b)}></img>
        </div>
      </div>
      <div className="iPhone11ProEighthSectorExtraDiv">
        <div className="iPhone11ProEighthSectorBigTwoDiv">
          <div className="iPhone11ProEighthSectorSmallFourDiv">
            <img src={nmOff}></img>
          </div>
          <div className="iPhone11ProEighthSectorSmallFourDiv">
            <img src={nmOn}></img>
          </div>
          <a href="/">
            <div className="iPhone11ProEighthSectorButtonDiv">
              <button>+</button>
              <span>
                See the advanced technology that goes into every Night mode shot
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default IPhone11ProEighthSector;
