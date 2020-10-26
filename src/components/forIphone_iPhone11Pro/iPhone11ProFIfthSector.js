import React from "react";
import "../../css/iPhone11ProFifthSectorCss.css";
import image1 from "../../images/forIphone11Pro/iPhone11Pro_telephoto.png";
import image2 from "../../images/forIphone11Pro/iPhone11Pro_wide.png";
import image3 from "../../images/forIphone11Pro/iPhone11Pro_ultraWide.png";
import image4 from "../../images/forIphone11Pro/iPhone11Pro_jump.png";

function IPhone11ProFIfthSector() {
  return (
    <div className="iPhone11ProFifthSectorDiv">
      <div className="iPhone11ProFifthSectorTitleDiv">
        <span>
          <span id="iPhone11ProFifthSectorTitleWhiteText">
            Expanded field of view.{" "}
          </span>
          iPhone 11 Pro lets you zoom from the Telephoto all the way out to the
          new Ultra Wide camera, for an impressive 4× optical zoom range.
        </span>
      </div>
      <div className="iPhone11ProFifthSectorImageEachDiv">
        <img src={image1}></img>
        <h3>Telephoto</h3>
      </div>
      <div className="iPhone11ProFifthSectorImageEachDiv">
        <img src={image2}></img>
        <h3>Wide</h3>
      </div>
      <div className="iPhone11ProFifthSectorImageEachDiv">
        <img src={image3}></img>
        <h3>Ultra Wide</h3>
      </div>
      <div className="iPhone11ProFifthSectorTitleTwoDiv">
        <span>
          <span id="iPhone11ProFifthSectorTitleWhiteText">
            {" "}
            Elegant, immersive interface.
          </span>{" "}
          We leveraged the wider field of view to let you see what’s happening
          outside the image frame — and simply tap to capture it. And there’s
          almost nothing between you and your subject except a new pro camera
          font. So you’re always fully immersed in the scene.
        </span>
      </div>
      <div className="iPhone11ProFifthSectorJumpImageDiv">
        <img src={image4}></img>
      </div>
      <a href="/">
        <div className="iPhone11ProFifthSectorButtonDiv">
          <button>+</button>
          <span>See how three cameras can work as one</span>
        </div>
      </a>
    </div>
  );
}

export default IPhone11ProFIfthSector;
