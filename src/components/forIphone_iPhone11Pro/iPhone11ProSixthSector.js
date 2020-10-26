import React, { useRef, useEffect } from "react";
import "../../css/iPhone11ProSixthSectorCss.css";
import { TweenMax } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import backgroundImage from "../../images/forIphone11Pro/iPhone11Pro_zoomBackground.png";

function IPhone11ProSixthSector() {
  let imageRef = useRef(null);
  let textRef = useRef(null);
  let triggerRef = useRef(null);

  ScrollMagicPluginGsap(ScrollMagic, TweenMax);

  let controller = new ScrollMagic.Controller();

  useEffect(() => {
    const imageAnimation = TweenMax.fromTo(
      imageRef,
      4,
      { scale: 4 },
      { scale: 1 }
    );
    const textAnimation = TweenMax.fromTo(
      textRef,
      4,
      { css: { scale: "1", "margin-left": "180px" } },
      { css: { scale: "11", "margin-left": "-900px" } }
    );
    let scene = new ScrollMagic.Scene({
      duration: 1000,
      triggerElement: triggerRef,
      triggerHook: 0
    })
      .setTween(imageAnimation)
      .addTo(controller);

    let sceneTwo = new ScrollMagic.Scene({
      duration: 1000,
      triggerElement: triggerRef,
      triggerHook: 0
    })
      .setTween(textAnimation)
      .addTo(controller);
  }, []);
  return (
    <div className="iPhone11ProSixthSectorDiv" ref={el => (triggerRef = el)}>
      <div className="iPhone11ProSixthSectorImageDiv">
        <img src={backgroundImage} ref={e => (imageRef = e)}></img>
        <div className="iPhone11ProSixthSectorImageTextDiv">
          <span ref={text => (textRef = text)}>
            take it all
            <sl id="iPhone11ProSixthSectorSpecialLetters">lllllllll</sl>lll in
          </span>
        </div>
      </div>
    </div>
  );
}

export default IPhone11ProSixthSector;
