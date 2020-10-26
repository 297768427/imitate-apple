import React, { useEffect, useRef } from "react";
import "../../css/homeAppleTVCss.css";
import ScrollMagic from "scrollmagic";
import appleTVTitle from "../../images/appleTVandTitle.png";
import TVanimation from "../../videos/appleTV.mp4";

function HomeAppleTV() {
  let animationDiv = useRef(null);
  let animation = useRef(null);

  let controller = new ScrollMagic.Controller();

  useEffect(() => {
    let scene = new ScrollMagic.Scene({
      duration: 350,
      triggerElement: animationDiv,
      triggerHook: 0.5
    }).addTo(controller);

    scene.on("enter", () => {
      animation.play();
    });
  }, []);

  const toAppleTVPage = () => {
    window.location.href = "/";
  };

  return (
    <div className="homeAppleTVDiv" onClick={() => toAppleTVPage()}>
      <div className="homeAppleTVTextDiv">
        <img src={appleTVTitle}></img>
        <br></br>
        <a href="/" style={{ marginRight: "12px" }}>
          Learn more >
        </a>{" "}
        <a href="/" style={{ marginLeft: "12px" }}>
          Buy >
        </a>
      </div>
      <div className="homeAppleTVAnimationDiv" ref={e => (animationDiv = e)}>
        <video
          ref={e => (animation = e)}
          width="100%"
          height="100%"
          src={TVanimation}
          type="video/mp4"
          muted="muted"
        />
      </div>
    </div>
  );
}

export default HomeAppleTV;
