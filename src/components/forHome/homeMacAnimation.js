import React, { useRef, useEffect } from "react";
import "../../css/homeMacCss.css";
import MacAnimation from "../../videos/Mac.mp4";
import ScrollMagic from "scrollmagic";

function HomeMacAnimation() {
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

  const toMacPage = () => {
    window.location.href = "/";
  };

  return (
    <div className="homeMacDiv" onClick={() => toMacPage()}>
      <div className="homeMacTextDiv">
        <h5>16-inch</h5>
        <h1>MacBook Pro</h1>
        <h4>The best of the brightest.</h4>
        <a href="/" style={{ marginRight: "12px" }}>
          Learn more >
        </a>{" "}
        <a href="/" style={{ marginLeft: "12px" }}>
          Buy >
        </a>
      </div>
      <div className="homeMacAnimationDiv" ref={e => (animationDiv = e)}>
        <video
          ref={e => (animation = e)}
          width="100%"
          height="100%"
          src={MacAnimation}
          type="video/mp4"
          muted="muted"
        />
      </div>
    </div>
  );
}

export default HomeMacAnimation;
