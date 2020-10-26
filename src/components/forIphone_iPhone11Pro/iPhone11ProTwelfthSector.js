import React from "react";
import "../../css/iPhone11ProTwelfthSectorCss.css";
import useAR from "../../images/forIphone11Pro/iPhone11Pro_useAR.png";
import or from "../../images/forIphone11Pro/iPhone11Pro_or.png";
import iconOne from "../../images/forIphone11Pro/iPhone11Pro_bottomIconOne.png";
import iconTwo from "../../images/forIphone11Pro/iPhone11Pro_bottomIconTwo.png";
import iconThree from "../../images/forIphone11Pro/iPhone11Pro_bottomIconThree.png";
import iconFour from "../../images/forIphone11Pro/iPhone11Pro_bottomIconFour.png";
import iconFive from "../../images/forIphone11Pro/iPhone11Pro_bottomIconFive.png";
import iconSix from "../../images/forIphone11Pro/iPhone11Pro_bottomIconSix.png";
import iconSeven from "../../images/forIphone11Pro/ipHone11Pro_bottomIconSeven.png";
import iconEight from "../../images/forIphone11Pro/iPhone11Pro_bottomIconEight.png";
import AR from "../../images/forIphone11Pro/iPhone11Pro_bottomIconAR.png";

function IPhone11ProTwelfthSector() {
  return (
    <div className="iPhone11ProTwelfthSectorDiv">
      <div className="iPhone11ProTwelfthSectorOneDiv">
        <h1>Even more stuff to geek out on.</h1>
        <div className="iPhone11ProTwelfthSectorOneEachDiv">
          <img src={iconOne}></img>
          <h5>Dolby Atmos.</h5>
          <span>
            Sound moves around you in 3D space, so you feel like you’re inside
            the action.
          </span>
        </div>
        <div className="iPhone11ProTwelfthSectorOneEachDiv">
          <img src={iconTwo}></img>
          <h5>Spatial audio.</h5>
          <span>
            Creates a more immersive, theatre‑like surround sound experience.
          </span>
        </div>
        <div className="iPhone11ProTwelfthSectorOneEachDiv">
          <img src={iconThree}></img>
          <h5>Audio Sharing.</h5>
          <span>Connect two sets of AirPods or Beats headphones at once.</span>
        </div>
        <div className="iPhone11ProTwelfthSectorOneEachDiv">
          <img src={iconFour}></img>
          <h5>Fast charge.</h5>
          <span>
            In a hurry? Charge up to 50 per cent in around 30 minutes with the
            included 18W adapter.
          </span>
        </div>
        <div className="iPhone11ProTwelfthSectorOneEachDiv">
          <img src={iconFive}></img>
          <h5>Wireless charging.</h5>
          <span>Just place iPhone 11 Pro on any Qi‑compatible charger.</span>
        </div>
        <div className="iPhone11ProTwelfthSectorOneEachDiv">
          <img src={iconSix}></img>
          <h5>Faster Wi‑Fi speeds.</h5>
          <span>
            Wi‑Fi 6 (802.11ax) lets you download content up to 38 per cent
            faster.
          </span>
        </div>
        <div className="iPhone11ProTwelfthSectorOneEachDiv">
          <img src={iconSeven}></img>
          <h5>Up to 30 LTE bands.</h5>
          <span>
            Gigabit-class LTE for the most extensive roaming worldwide.
          </span>
        </div>
        <div className="iPhone11ProTwelfthSectorOneEachDiv">
          <img src={iconEight}></img>
          <h5>Dual SIM with eSIM support.</h5>
          <span>Add a second number. Or even a local data plan abroad.</span>
        </div>
        <div className="iPhone11ProTwelfthSectorOneEachDiv"></div>
      </div>
      <div className="iPhone11ProTwelfthSectorTwoDiv">
        <div className="iPhone11ProTwelfthSectorTwoTextDiv">
          <img src={AR}></img>
          <h1>Use AR to see iPhone 11 Pro.</h1>
          <span>Open this page using Safari on your iPhone or iPad.</span>
        </div>
        <div className="iPhone11ProTwelfthSectorTwoImageDiv">
          <img src={useAR}></img>
        </div>
      </div>
      <div className="iPhone11ProTwelfthSectorThreeDiv">
        <div className="iPhone11ProTwelfthSectorThreeImageDiv">
          <img src={or}></img>
        </div>
        <div className="iPhone11ProTwelfthSectorThreeTextDiv">
          <h1>iPhone 11 or iPhone 11 Pro?</h1>
          <a href="/">Get a quick look at the differences ></a>
        </div>
      </div>
      <div className="iPhone11ProTwelfthSectorFourDiv">
        <div className="iPhone11ProTwelfthSectorFourOneDiv">
          <h1>You could get up to A$560 in credit towards an iPhone 11 Pro</h1>
          <p>
            You could get credit towards a new iPhone when you trade in your
            eligible smartphone. It's good for you and the planet.
          </p>
          <a href="/">Learn more ></a>
        </div>
        <div className="iPhone11ProTwelfthSectorFourTwoDiv">
          <h1>Why apple is the best palce to buy</h1>
          <p>
            Have questions about carriers, payment options or anything else
            iPhone? Just say the word.
          </p>
          <a href="/">Learn more ></a>
        </div>
      </div>
    </div>
  );
}

export default IPhone11ProTwelfthSector;
