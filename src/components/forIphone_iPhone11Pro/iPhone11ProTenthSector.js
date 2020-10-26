import React, { useEffect, useRef, useState } from "react";
import ScrollMagic from "scrollmagic";
import "../../css/iPhone11ProTenthSectorCss.css";
import theVideo from "../../videos/forIphone11Pro/video2.mp4";

function IPhone11ProTenthSector() {
  let videoRef = useRef(null);

  const [videoPlayed, setVideoPlayed] = useState(false);

  let controller = new ScrollMagic.Controller();

  const playVideo = () => {
    videoRef.play();
    setVideoPlayed(false);
  };

  const videoToTrue = () => {
    setVideoPlayed(true);
  };

  useEffect(() => {
    let scene = new ScrollMagic.Scene({
      duration: 200,
      triggerElement: videoRef,
      triggerHook: 0.3
    }).addTo(controller);

    scene.on("enter", () => {
      videoRef.play();
    });

    scene.on("leave", () => {
      scene.enabled(false);
    });
  }, []);

  return (
    <div className="iPhone11ProTenthSectorDiv">
      <div className="iPhone11ProTenthSectorVideoDiv">
        <video
          src={theVideo}
          ref={e => (videoRef = e)}
          type="video/mp4"
          muted="muted"
          onEnded={() => videoToTrue()}
        ></video>
        <h5
          onClick={() => playVideo()}
          id={
            videoPlayed
              ? "iPhone11ProTenthSectorVideoYes"
              : "iPhone11ProTenthSectorVideoNo"
          }
        >
          Replay
        </h5>
      </div>
      <div className="iPhone11ProTenthSectorTextDiv">
        <h1>Be ready when your photo op turns into a video op.</h1>
        <span>
          Say you’re taking photos and you see something you’ve got to catch on
          video. With QuickTake, there’s no need to switch modes. Just leave
          your finger on the shutter button to start recording. Want to keep the
          recording going? Swipe right. To take burst photos, swipe left.
        </span>
      </div>
    </div>
  );
}

export default IPhone11ProTenthSector;
