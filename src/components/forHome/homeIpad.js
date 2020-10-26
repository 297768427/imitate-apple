import React, { useEffect, useRef } from "react";
import ScrollMagic from "scrollmagic";
import ipadVideo from "../../videos/ipad.mp4";
import "../../css/homeIpadCss.css";

function HomeIpad() {
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

  const toIpadPage = () => {
    window.location.href = "/";
  };

  return (
    <div className="homeIpadDiv" onClick={() => toIpadPage()}>
      <div className="homeIpadTextDiv">
        <h5>The new</h5>
        <h1>iPad</h1>
        <h4>Like a computer.Unlike any computer.</h4>
        <a href="/" style={{ marginRight: "12px" }}>
          Learn more >
        </a>{" "}
        <a href="/" style={{ marginLeft: "12px" }}>
          Buy >
        </a>
      </div>
      <div className="homeIpadAnimationDiv" ref={e => (animationDiv = e)}>
        <video
          ref={e => (animation = e)}
          width="100%"
          height="100%"
          src={ipadVideo}
          type="video/mp4"
          muted="muted"
        />
      </div>
    </div>
  );
}

export default HomeIpad;
