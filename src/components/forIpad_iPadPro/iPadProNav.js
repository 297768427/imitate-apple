import React, { useState, useEffect } from "react";
import "../../css/iPadProNavCss.css";

function IPadProNav() {
  const [y, setY] = useState(0);

  const toBuyPage = () => {
    window.location.href = "/buy";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scroll_position = window.scrollY;
      setY(scroll_position);
    });
  }, []);

  return (
    <div
      className="iPadProNavDiv "
      style={{ position: y <= 42 ? "sticky" : "fixed" }}
    >
      <div className="iPadProNavLeftDiv">
        <a href="/iPad_iPadPro">iPad Pro</a>
      </div>
      <div className="iPadProNavRightDiv">
        <a href="/iPad_iPadPro">Overview</a>
        <a href="/">Design</a>
        <a href="/">Why iPad</a>
        <a href="/">Tech Specs</a>
        <button onClick={() => toBuyPage()}>Buy</button>
      </div>
    </div>
  );
}

export default IPadProNav;
