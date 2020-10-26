import React, { useRef, useEffect } from "react";
import "../../css/iPhone11ProFirstSectorCss.css";
import ScrollMagic from "scrollmagic";
import video1 from "../../videos/forIphone11Pro/video1.mp4";
import playIcon from "../../images/forIphone11Pro/iPhone11Pro_playIcon.png";

function IPhone11ProFirstSector() {
  let firstVideoTrigger = useRef(null);
  let firstVideo = useRef(null);

  let controller = new ScrollMagic.Controller();

  useEffect(() => {
    let scene = new ScrollMagic.Scene({
      duration: 450,
      triggerElement: firstVideoTrigger,
      triggerHook: 0.4
    }).addTo(controller);

    scene.on("enter", () => {
      firstVideo.current.play();
    });

    scene.on("leave", () => {
      scene.enabled(false);
    });
  }, []);

  return (
    <div className="iPhone11ProFirstSectorDiv">
      <div className="iPhone11ProFirstSectorBarDiv">
        <span>
          Trade in your current iPhone at an Apple Store and you could get up to
          A$560 in credit towards a new one.* &nbsp;&nbsp;
          <a href="/">Learn more ></a>
        </span>
      </div>
      <div
        className="iPhone11ProFirstSectorVideoDiv"
        ref={e => (firstVideoTrigger = e)}
      >
        <video
          src={video1}
          ref={firstVideo}
          type="video/mp4"
          muted="muted"
        ></video>
      </div>
      <div className="iPhone11ProFirstSectorTextDiv">
        <h1>And then there was Pro.</h1>
        <p>
          A transformative triple‑camera system that adds tonnes of<br></br>{" "}
          capability without complexity. An unprecedented leap in battery life.{" "}
          <br></br>And a mind‑blowing chip that doubles down on machine learning
          <br></br>
          and pushes the boundaries of what a smartphone can do. Welcome
          <br></br> to the first iPhone powerful enough to be called Pro.
        </p>
        <div className="iPhone11ProFirstSectorTextLinkDiv">
          <a href="/">Watch the keynote</a>
          <img src={playIcon}></img>
        </div>
        <div className="iPhone11ProFirstSectorTextLinkDiv">
          <a href="/">Watch the film</a>
          <img src={playIcon}></img>
        </div>
      </div>
    </div>
  );
}

export default IPhone11ProFirstSector;
