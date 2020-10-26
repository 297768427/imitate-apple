import React from "react";
import "../../css/homeFooterCss.css";

function HomeFooter() {
  return (
    <div className="homeFooterDiv">
      <hr></hr>
      <div className="homeFootercontentDiv">
        <div className="homeFooterColumn">
          <ul>
            <li className="homeFooterColumnTitle">Shop and Learn</li>
            <li>
              <a href="/">Mac</a>
            </li>
            <li>
              <a href="/">iPad</a>
            </li>
            <li>
              <a href="/"> iPhone</a>
            </li>
            <li>
              <a href="/">Watch</a>
            </li>
            <li>
              <a href="/">TV</a>
            </li>
            <li>
              <a href="/">Music</a>
            </li>
            <li>
              <a href="/">AirPods</a>
            </li>
            <li>
              <a href="/">HomePod</a>
            </li>
            <li>
              <a href="/">iPod touch</a>
            </li>
            <li>
              <a href="/">Accessories</a>
            </li>
            <li>
              <a href="/">Gift Cards</a>
            </li>
          </ul>
        </div>
        <div className="homeFooterColumn">
          <ul>
            <li className="homeFooterColumnTitle">Services</li>
            <li>
              <a href="/">Apple Music</a>
            </li>
            <li>
              <a href="/">Apple New+</a>
            </li>
            <li>
              <a href="/">Apple TV+</a>
            </li>
            <li>
              <a href="/">Apple Arcade</a>
            </li>
            <li>
              <a href="/">iCloud</a>
            </li>
            <br></br>
            <li className="homeFooterColumnTitle">Account</li>
            <li>
              <a href="/">Manage Your Apple ID</a>
            </li>
            <li>
              <a href="/">Apple Store Account</a>
            </li>
            <li>
              <a href="/">iCloud.com</a>
            </li>
          </ul>
        </div>
        <div className="homeFooterColumn">
          <ul>
            <li className="homeFooterColumnTitle">Apple Store</li>
            <li>
              <a href="/">Find a Store</a>
            </li>
            <li>
              <a href="/">Genius Bar</a>
            </li>
            <li>
              <a href="/">Today at Apple</a>
            </li>
            <li>
              <a href="/">Apple Camp</a>
            </li>
            <li>
              <a href="/">Field Trip</a>
            </li>
            <li>
              <a href="/">Apple Store App</a>
            </li>
            <li>
              <a href="/">Refurbished and Clearance</a>
            </li>
            <li>
              <a href="/">Financing</a>
            </li>
            <li>
              <a href="/">Apple Trade In</a>
            </li>
            <li>
              <a href="/">Order Status</a>
            </li>
            <li>
              <a href="/">Shopping Help</a>
            </li>
            <li>
              <a href="/">Consumer Law</a>
            </li>
          </ul>
        </div>
        <div className="homeFooterColumn">
          <ul>
            <li className="homeFooterColumnTitle">For Business</li>
            <li>
              <a href="/">Apple and Business</a>
            </li>
            <li>
              <a href="/">Shop for Business</a>
            </li>
            <br></br>
            <li className="homeFooterColumnTitle">For Education</li>
            <li>
              <a href="/">Apple and Education</a>
            </li>
            <li>
              <a href="/">Shop for University</a>
            </li>
            <br></br>
            <li className="homeFooterColumnTitle">For Healthcare</li>
            <li>
              <a href="/">Apple in Healthcare</a>
            </li>
          </ul>
        </div>
        <div className="homeFooterColumn">
          <ul>
            <li className="homeFooterColumnTitle">About Values</li>
            <li>
              <a href="/">Accessibilit</a>
            </li>
            <li>
              <a href="/">Environment</a>
            </li>
            <li>
              <a href="/">Privacy</a>
            </li>
            <li>
              <a href="/">Supplier Responsibility</a>
            </li>
            <br></br>
            <li className="homeFooterColumnTitle">About Apple</li>
            <li>
              <a href="/">Newsroom</a>
            </li>
            <li>
              <a href="/">Apple Leadership</a>
            </li>
            <li>
              <a href="/">Job Opportunities</a>
            </li>
            <li>
              <a href="/">Investors</a>
            </li>
            <li>
              <a href="/">Envents</a>
            </li>
            <li>
              <a href="/">Contact Apple</a>
            </li>
          </ul>
        </div>
      </div>
      <span>
        More ways to shop:<a href="/">Find an Apple Store</a> or{" "}
        <a href="/">other retailer </a>near you. Or call 133-622
      </span>
      <hr id="homeFooterBottomHr"></hr>
      <span>Copyright &copy; 2020 Apple Inc. All rights reserved.</span>
      <span id="homeFooterBottomTagsSpan">
        <a href="/">Privacy Policy</a>
        <hr></hr>
        <a href="/">Terms of Use</a>
        <hr></hr>
        <a href="/">Sales and Refunds</a>
        <hr></hr>
        <a href="/">Legal</a>
        <hr></hr>
        <a href="/">Site Map</a>
      </span>
    </div>
  );
}

export default HomeFooter;
