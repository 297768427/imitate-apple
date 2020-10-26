import React, { useEffect, useState, useRef } from "react";
import "../../css/iPadProContentCss.css";
import ScrollMagic from "scrollmagic";
import Skrollr from "skrollr";
import HomeFooter from "./../forHome/homeFooter";
import IPhoneBottomClaim from "./../forIphone/iPhoneBottomClaim";
import pro1Image from "../../images/forIpadPro/Pro_1.png";
import pro2Image from "../../images/forIpadPro/Pro_2.png";
import pro3Image from "../../images/forIpadPro/Pro_3.png";
import pro4Image from "../../images/forIpadPro/Pro_4.png";
import pro5Image from "../../images/forIpadPro/Pro_5.png";
import pro6Image from "../../images/forIpadPro/Pro_6.png";
import pro7Image from "../../images/forIpadPro/Pro_7.png";
import pro8Image from "../../images/forIpadPro/Pro_8.png";
import pro9Image from "../../images/forIpadPro/Pro_9.png";
import pro10Image from "../../images/forIpadPro/Pro_10.png";
import pro11Image from "../../images/forIpadPro/Pro_11.png";
import pro12Image from "../../images/forIpadPro/Pro_12.png";
import video1 from "../../videos/forIpadPro/Pro_video_1.mp4";
import video2 from "../../videos/forIpadPro/Pro_video_2.mp4";
import video3 from "../../videos/forIpadPro/Pro_video_3.mp4";
import video4 from "../../videos/forIpadPro/Pro_video_4.mp4";

function IPadProContent() {
  const [y, setY] = useState(0);
  const [videoTwoEnded, setVideoTwoEnded] = useState(false);
  const [videoThreeEnded, setVideoThreeEnded] = useState(false);

  let firstVideoTrigger = useRef(null);
  let firstVideo = useRef(null);

  let secondVideoTrigger = useRef(null);
  let secondVideo = useRef(null);

  let thirdVideoTrigger = useRef(null);
  let thirdVideo = useRef(null);

  let fourthVideoTrigger = useRef(null);
  let fourthVideo = useRef(null);

  let controller = new ScrollMagic.Controller({ vertical: false });
  let controller2 = new ScrollMagic.Controller({ vertical: false });
  let controller3 = new ScrollMagic.Controller({ vertical: false });
  let controller4 = new ScrollMagic.Controller({ vertical: false });

  const videoTwoEnd = () => {
    setVideoTwoEnded(true);
  };

  const videoTwoPlay = () => {
    secondVideo.current.play();
    setVideoTwoEnded(false);
  };

  const videoThreeEnd = () => {
    setVideoThreeEnded(true);
  };

  const videoThreePlay = () => {
    thirdVideo.current.play();
    setVideoThreeEnded(false);
  };

  useEffect(() => {
    Skrollr.init();
    window.addEventListener("scroll", () => {
      let scroll_position = window.scrollY;
      setY(scroll_position);
    });
    let scene = new ScrollMagic.Scene({
      duration: 900,
      triggerElement: firstVideoTrigger
    }).addTo(controller);
    scene.on("enter", () => {
      firstVideo.current.play();
    });

    let scene2 = new ScrollMagic.Scene({
      duration: 600,
      triggerElement: secondVideoTrigger
    }).addTo(controller2);
    scene2.on("enter", () => {
      secondVideo.current.play();
    });

    let scene3 = new ScrollMagic.Scene({
      duration: 450,
      triggerElement: thirdVideoTrigger
    }).addTo(controller3);
    scene3.on("enter", () => {
      thirdVideo.current.play();
    });

    let scene4 = new ScrollMagic.Scene({
      duration: 100,
      triggerElement: fourthVideoTrigger
    }).addTo(controller4);
    scene4.on("enter", () => {
      fourthVideo.current.play();
    });
  }, []);
  return (
    <div className="iPadProContentEdgeDiv">
      <div
        className="iPadProContentDiv"
        data-0="transform:translateX(0%) "
        data-7500="transform:translateX(-92.9%)"
        style={{ marginTop: y > 42 ? 50 + "px" : 0 }}
      >
        <div className="iPadProContentEachDiv">
          <img src={pro1Image}></img>
        </div>
        <div className="iPadProContentEachDiv">
          <h1>Meet iPad Pro.</h1>
          <a href="/">Watch the films ></a>
          <a href="/">See what iPad can do ></a>
        </div>
        <div
          className="iPadProContentEachDiv"
          id="iPadProContentEachVideoOneDiv"
          ref={e => (firstVideoTrigger = e)}
        >
          <video
            ref={firstVideo}
            src={video1}
            type="video/mp4"
            muted="muted"
          ></video>
        </div>
        <div className="iPadProContentEachDiv">
          <img src={pro2Image}></img>{" "}
        </div>
        <div className="iPadProContentEachDiv">
          <span>
            The <span style={{ color: "black" }}> all-screen design</span> means
            iPad Pro is a magical piece of glass that does everything you need,
            any way you hold it.
          </span>
        </div>
        <div
          className="iPadProContentEachDiv"
          id="iPadProContentEachVideoTwoDiv"
          ref={e => (secondVideoTrigger = e)}
        >
          <div
            id={
              videoTwoEnded
                ? "iPadProContentEachVideoTwoReplay"
                : "iPadProContentEachVideoTwoReplayHidden"
            }
          >
            <span onClick={() => videoTwoPlay()}>Replay</span>
          </div>
          <video
            onPlay={() => {
              setVideoTwoEnded(false);
            }}
            onEnded={() => {
              videoTwoEnd();
            }}
            src={video2}
            type="video/mp4"
            muted="muted"
            ref={secondVideo}
          ></video>
        </div>
        <div className="iPadProContentEachDiv">
          <span>
            With <span style={{ color: "black" }}>intuitive gestures</span> ,
            getting around is simple.
          </span>

          <p>Just swipe up to go Home.</p>
        </div>
        <div
          className="iPadProContentEachDiv"
          id="iPadProContentEachVideoThreeDiv"
          ref={e => (thirdVideoTrigger = e)}
        >
          <div id="iPadProContentEachVideoThreeReplayCover"></div>
          <div
            id={
              videoThreeEnded
                ? "iPadProContentEachVideoThreeReplay"
                : "iPadProContentEachVideoThreeReplayHidden"
            }
          >
            <span onClick={() => videoThreePlay()}>Replay</span>
          </div>
          <video
            onPlay={() => {
              setVideoThreeEnded(false);
            }}
            onEnded={() => {
              videoThreeEnd();
            }}
            src={video3}
            type="video/mp4"
            muted="muted"
            ref={thirdVideo}
          ></video>
        </div>
        <div className="iPadProContentEachDiv">
          <span>
            The <span style={{ color: "black" }}>Liquid Retina display</span>{" "}
            goes from edge to edge. True-to-life colour and ProMotion technology
            make everything look gorgeous and feel responsive.
          </span>

          <p>
            You’ve got to see it — <br></br>and touch it — to believe it.
          </p>
        </div>
        <div className="iPadProContentEachDiv" id="iPadProContentDownToEdgeDiv">
          <img src={pro3Image}></img>
        </div>
        <div className="iPadProContentEachDiv">
          <span>
            Use Face ID to unlock your iPad Pro, log in to apps and{" "}
            <span style={{ color: "black" }}>pay with a glance </span>
            within selected apps and on participating websites.
          </span>

          <p>It’s one password you can’t forget.</p>
        </div>
        <div className="iPadProContentEachDiv">
          <img src={pro4Image}></img>{" "}
        </div>
        <div className="iPadProContentEachDiv">
          <span>
            A12X Bionic delivers graphics that are{" "}
            <span style={{ color: "black" }}>twice as fast</span>. Which makes
            iPad Pro the perfect machine for augmented reality and a great way
            to play immersive games.
          </span>

          <p>
            Reality just<br></br>
            got really fun.
          </p>
        </div>
        <div className="iPadProContentEachDiv" id="iPadProContentDownToEdgeDiv">
          <img src={pro5Image}></img>
        </div>
        <div className="iPadProContentEachDiv" id="iPadProContentPencilTextDiv">
          <span>
            Introducing <br></br>
            <span style={{ color: "black" }}>Apple Pencil</span>.
          </span>
        </div>
        <div
          className="iPadProContentEachDiv"
          id="iPadProContentEachVideoFourDiv"
        >
          <div
            ref={e => (fourthVideoTrigger = e)}
            id="iPadProContentEachVideoFourTriggerDiv"
          ></div>
          <video
            src={video4}
            type="video/mp4"
            muted="muted"
            ref={fourthVideo}
          ></video>
        </div>
        <div className="iPadProContentEachDiv" id="iPadProContentLastTextDiv">
          <span>
            That’s a look at the new iPad Pro. <br></br>
            <span style={{ color: "black" }}>
              It’s the biggest change to iPad since iPad.
            </span>
          </span>
        </div>
        <div className="iPadProContentEachDiv">
          <img src={pro6Image}></img>
        </div>
        <div className="iPadProContentDarkDiv">
          <div className="iPadProContentDarkEachDiv">
            <div className="iPadProContentDarkEachTextDiv">
              <h3>The only thing that hasn't</h3>
              <h3>changed is the name</h3>
              <a href="/">Learn more about Design ></a>
            </div>
            <img src={pro7Image}></img>
          </div>
          <div className="iPadProContentDarkEachDiv">
            <div className="iPadProContentDarkEachTextDiv">
              <h3>Like an computer.</h3>
              <h3>Unlike any computer.</h3>
              <a href="/">Learn more about Why iPad Pro ></a>
            </div>
            <img src={pro8Image}></img>
          </div>
        </div>
        <div
          className="iPadProContentLastDiv"
          data-7500="transform:translateY(0%)"
          data-8500="transform:translateY(-75%)"
        >
          <div className="iPadProContentLastOneDiv">
            <div className="iPadProContentLastOneEachDiv">
              <img src={pro9Image}></img>
              <h5>Free delivery</h5>
              <p>And free returns. See check-out for delivery dates.</p>
              <a href="/">Learn more ></a>
            </div>
            <div className="iPadProContentLastOneEachDiv">
              <img src={pro10Image}></img>
              <h5>Apple Store</h5>
              <p>
                Shop, research, check out upcoming workshops and get the most
                from your store visit.
              </p>
              <a href="/">Learn more ></a>
            </div>
            <div className="iPadProContentLastOneEachDiv">
              <img src={pro11Image}></img>
              <h5>Financing</h5>
              <p>0% interest available.</p>
              <a href="/">Learn more ></a>
            </div>
            <div className="iPadProContentLastOneEachDiv">
              <img src={pro12Image}></img>
              <h5>Get help buying</h5>
              <p>
                Have a question? Call a Specialist or chat online. Call 133-622.
              </p>
              <a href="/">Learn more ></a>
            </div>
          </div>
          <IPhoneBottomClaim></IPhoneBottomClaim>
          <HomeFooter></HomeFooter>
        </div>
      </div>
    </div>
  );
}

export default IPadProContent;
