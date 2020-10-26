import React from "react";
import "../../css/iPhone11ProNavCss.css";

function IPhone11ProNav() {
  return (
    <div className="iPhone11ProNavDiv">
      <div className="iPhone11ProNavLeftDiv">
        <a href="/iPhone_iPhone11Pro">iPhone 11 Pro</a>
      </div>
      <div className="iPhone11ProNavRightDiv">
        <a href="/iPhone_iPhone11Pro">Overview</a>
        <a href="/">Tech Specs</a>
        <button>Buy</button>
      </div>
    </div>
  );
}

export default IPhone11ProNav;
