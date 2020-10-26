import React from "react";
import HomeScroll from "./../components/forHome/homeScroll";
import HomeIphone11 from "./../components/forHome/homeIphone11";
import HomeMacAnimation from "./../components/forHome/homeMacAnimation";
import HomeIpad from "./../components/forHome/homeIpad";
import HomeAppleTV from "./../components/forHome/homeAppleTV";
import HomeFooter from "./../components/forHome/homeFooter";
import HomeAirPods from "./../components/forHome/homeAirpods";

function Home() {
  return (
    <div>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
        style={{ marginBottom: "0px" }}
      >
        <strong>Frank Sun:</strong> This website is only for my potential
        employers to check my ability. There is no commercial usage. Most of the
        materials are copied from apple official website. Since most of the
        materials are second-hand, the dispaly may not as good as what exactly
        it is on the apple website.
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <HomeScroll></HomeScroll>
      <HomeIphone11></HomeIphone11>
      <HomeMacAnimation></HomeMacAnimation>
      <HomeIpad></HomeIpad>
      <HomeAirPods></HomeAirPods>
      <HomeAppleTV></HomeAppleTV>
      <HomeFooter></HomeFooter>
    </div>
  );
}

export default Home;
