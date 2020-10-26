import React from "react";
import "../../css/iPadEssentialsCss.css";
import pencilImage from "../../images/forIpad/ipad_pencil.png";
import accessoriesImage from "../../images/forIpad/ipad_accessories.png";
import airpodsImage from "../../images/forIpad/ipad_airpods.png";
import keyboardImage from "../../images/forIpad/ipad_keyboard.png";

function IPadEssentials() {
  return (
    <div className="iPadEssentialsDiv">
      <div className="iPadEssentialsTitleDiv">
        <h1>iPad essentials.</h1>
      </div>
      <br></br>
      <div className="iPadEssentialsContentEachDiv">
        <h1>Apple Pencil</h1>
        <span>Dream it up. Jot it down.</span>
        <br></br>
        <br></br>
        <a href="/">Learn more >&nbsp;&nbsp;</a>
        <a href="/">Buy ></a>
        <img src={pencilImage}></img>
      </div>
      <div className="iPadEssentialsContentEachDiv">
        <img id="ipad_keyboardImage" src={keyboardImage}></img>
        <h1>Smart Keyboard Folio</h1>
        <h1>Smart Keyboard Folio</h1>
        <h1>Smart Keyboard Folio</h1>
        <h1>Smart Keyboard Folio</h1>
        <h1>Smart Keyboard Folio</h1>
        <span>Full‑sized keyboard. Front and back protection.</span>
        <br></br>
        <br></br>
        <a href="/">Learn more >&nbsp;&nbsp;</a>
        <a href="/">Buy ></a>
      </div>
      <div className="iPadEssentialsContentEachDiv">
        <h1>Accessories</h1>
        <span>
          Explore covers, cases and more to<br></br> help you get the most from
          <br></br> your iPad.
        </span>
        <br></br>
        <br></br>
        <a href="/">Learn more >&nbsp;&nbsp;</a>
        <a href="/">Buy ></a>
        <img src={accessoriesImage}></img>
      </div>
      <div className="iPadEssentialsContentEachDiv">
        <h1>AirPods</h1>
        <span>Magic runs in the family.</span>
        <br></br>
        <br></br>
        <a href="/">Learn more >&nbsp;&nbsp;</a>
        <a href="/">Buy ></a>
        <img src={airpodsImage}></img>
      </div>
    </div>
  );
}

export default IPadEssentials;
