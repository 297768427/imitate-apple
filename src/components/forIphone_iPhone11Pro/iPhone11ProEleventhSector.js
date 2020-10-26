import React, { useEffect, useRef } from "react";
import { TweenMax } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import "../../css/iPhone11ProEleventhSectorCss.css";
import backGround from "../../images/forIphone11Pro/iPhone11Pro_A13.png";

function IPhone11ProEleventhSector() {
  let firstRef = useRef(null);
  let sixOne = useRef(null);
  let sixTwo = useRef(null);
  let sixThree = useRef(null);
  let sixFour = useRef(null);
  let sixFive = useRef(null);
  let sixSix = useRef(null);

  ScrollMagicPluginGsap(ScrollMagic, TweenMax);

  let controller = new ScrollMagic.Controller();

  useEffect(() => {
    const animationOne = TweenMax.from(
      firstRef,
      4,
      { opacity: 0 },
      { opacity: 1 }
    );

    const animationSixOne = TweenMax.from(
      sixOne,
      4,
      { opacity: 0 },
      { opacity: 1 }
    );
    const animationSixTwo = TweenMax.from(
      sixTwo,
      4,
      { opacity: 0 },
      { opacity: 1 }
    );
    const animationSixThree = TweenMax.from(
      sixThree,
      4,
      { opacity: 0 },
      { opacity: 1 }
    );
    const animationSixFour = TweenMax.from(
      sixFour,
      4,
      { opacity: 0 },
      { opacity: 1 }
    );
    const animationSixFive = TweenMax.from(
      sixFive,
      4,
      { opacity: 0 },
      { opacity: 1 }
    );
    const animationSixSix = TweenMax.from(
      sixSix,
      4,
      { opacity: 0 },
      { opacity: 1 }
    );

    let sceneOne = new ScrollMagic.Scene({
      duration: 700,
      triggerElement: firstRef,
      triggerHook: 0.6
    })
      .setTween(animationOne)
      .addTo(controller);

    let sceneSixOne = new ScrollMagic.Scene({
      duration: 300,
      triggerElement: sixOne,
      triggerHook: 0.9
    })
      .setTween(animationSixOne)
      .addTo(controller);

    let sceneSixTwo = new ScrollMagic.Scene({
      duration: 300,
      triggerElement: sixTwo,
      triggerHook: 0.7
    })
      .setTween(animationSixTwo)
      .addTo(controller);

    let sceneSixThree = new ScrollMagic.Scene({
      duration: 300,
      triggerElement: sixThree,
      triggerHook: 0.5
    })
      .setTween(animationSixThree)
      .addTo(controller);

    let sceneSixFour = new ScrollMagic.Scene({
      duration: 300,
      triggerElement: sixFour,
      triggerHook: 0.9
    })
      .setTween(animationSixFour)
      .addTo(controller);

    let sceneSixFive = new ScrollMagic.Scene({
      duration: 300,
      triggerElement: sixFive,
      triggerHook: 0.7
    })
      .setTween(animationSixFive)
      .addTo(controller);

    let sceneSixSix = new ScrollMagic.Scene({
      duration: 300,
      triggerElement: sixSix,
      triggerHook: 0.5
    })
      .setTween(animationSixSix)
      .addTo(controller);
  }, []);

  return (
    <div className="iPhone11ProEleventhSectorDiv">
      <div className="iPhone11ProEleventhSectorTextOneDiv">
        <h1>Even more cool camera features.</h1>
        <div className="iPhone11ProEleventhSectorTextOneContainerDiv">
          <div className="iPhone11ProEleventhSectorTextOneContainerEachDiv">
            <h2>40%</h2>
            <span>
              more light capture<br></br> with Telephoto
            </span>
          </div>
          <div className="iPhone11ProEleventhSectorTextOneContainerEachDiv">
            <h2>36%</h2>
            <span>
              brighter True Tone<br></br> flash with Slow Sync
            </span>
          </div>
          <div className="iPhone11ProEleventhSectorTextOneContainerEachDiv">
            <h2>Zero</h2>
            <span>shutter lag</span>
          </div>
          <div className="iPhone11ProEleventhSectorTextOneContainerEachDiv">
            <h2>6</h2>
            <span>
              lighting effects in<br></br> Portrait mode
            </span>
          </div>
          <div className="iPhone11ProEleventhSectorTextOneContainerEachDiv">
            <h2>2×</h2>
            <span>
              more height for<br></br> panos
            </span>
          </div>
          <div className="iPhone11ProEleventhSectorTextOneContainerEachDiv">
            <h2>OIS</h2>
            <span>
              optical image<br></br> stabilisation
            </span>
          </div>
        </div>
      </div>
      <div className="iPhone11ProEleventhSectorTextTwoDiv">
        <h1>Pro display</h1>
        <h2>Super Retina XDR.</h2>
        <h2>A sharp contrast from</h2>
        <h2>everything else.</h2>
      </div>
      <div className="iPhone11ProEleventhSectorTextThreeDiv">
        <div
          className="iPhone11ProEleventhSectorTextThreeHeadDiv"
          ref={e => (firstRef = e)}
        >
          <h1>Pro performance</h1>
          <h1> A chip so advanced,</h1>
          <h1>even we’re trying to</h1>
          <h1>catch up.</h1>
          <span>
            We custom‑built A13 Bionic with a focus on machine learning across
            the entire chip — enabling experiences that simply aren’t found on
            any other smartphone. In fact, it’s so fast, so powerful and so
            intelligent, it’s years ahead of any other chip. Which gives you an
            unfair advantage.
          </span>
          <div className="iPhone11ProEleventhSectorTextThreeHeadLineDiv"></div>
          <div className="iPhone11ProEleventhSectorTextThreeHeadLineRightTextDiv">
            <h5>The fastest</h5>
            <h5>chip ever in</h5>
            <h5>a smartphone</h5>
          </div>
        </div>
        <div className="iPhone11ProEleventhSectorTextThreeContainerDiv">
          <div
            className="iPhone11ProEleventhSectorTextThreeContainerEachDiv"
            ref={e => (sixOne = e)}
          >
            <h1>64-bit Fusion</h1>
            <h5>architecture</h5>
            <span>
              Performance cores process complex tasks faster than ever, while
              custom-developed efficiency cores handle everyday tasks — helping
              to deliver a huge leap in battery life.
            </span>
          </div>
          <div
            className="iPhone11ProEleventhSectorTextThreeContainerEachDiv"
            ref={e => (sixTwo = e)}
          >
            <h1>Fastest CPU</h1>
            <h5>in a smartphone</h5>
            <span>
              The CPU’s two performance cores are up to 20 per cent faster and
              use up to 30 per cent less power. And its four efficiency cores
              are up to 20 per cent faster and use up to 40 per cent less power.
            </span>
          </div>
          <div
            className="iPhone11ProEleventhSectorTextThreeContainerEachDiv"
            ref={e => (sixThree = e)}
          >
            <h1>Fastest GPU</h1>
            <h5>in a smartphone</h5>
            <span>
              The Apple‑designed GPU is up to 20 per cent faster and uses up to
              40 per cent less power. Perfect for high‑performance gaming and
              the latest AR experiences.
            </span>
          </div>
          <div
            className="iPhone11ProEleventhSectorTextThreeContainerEachDiv"
            ref={e => (sixFour = e)}
          >
            <h1>Neural Engine</h1>
            <h5>for advanced machine learning</h5>
            <span>
              The eight‑core, Apple‑designed Neural Engine is up to 20 per cent
              faster and uses up to 15 per cent less power. It’s a driving force
              behind the triple‑camera system, Face ID, AR apps and more.
            </span>
          </div>
          <div
            className="iPhone11ProEleventhSectorTextThreeContainerEachDiv"
            ref={e => (sixFive = e)}
          >
            <h1>Machine Learning</h1>
            <h5>accelerators</h5>
            <span>
              Two new machine learning accelerators on the CPU run matrix
              mathematical computations up to six times faster, allowing the CPU
              to perform over a trillion operations per second.
            </span>
          </div>
          <div
            className="iPhone11ProEleventhSectorTextThreeContainerEachDiv"
            ref={e => (sixSix = e)}
          >
            <h1>
              Core<br></br> ML 3
            </h1>
            <h5>for machine learning in apps</h5>
            <span>
              To help developers leverage the machine learning power of A13
              Bionic, Core ML 3 works with the Machine Learning Controller to
              automatically direct tasks to the CPU, GPU or Neural Engine.
            </span>
          </div>
        </div>
        <div className="iPhone11ProEleventhSectorTextThreeBackDiv">
          <div className="iPhone11ProEleventhSectorTextThreeBackStickyDiv">
            <img src={backGround}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IPhone11ProEleventhSector;
