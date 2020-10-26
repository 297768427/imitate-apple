import React from "react";
import TheNav from "./../components/buyIpadPro/theNav";
import TheMain from "./../components/buyIpadPro/theMain";
import TheRest from "./../components/buyIpadPro/theRest";
import HomeFooter from "../components/forHome/homeFooter";
import IPhoneBottomClaim from "../components/forIphone/iPhoneBottomClaim";

function BuyPage() {
  return (
    <div>
      <TheNav></TheNav>
      <TheMain></TheMain>
      <TheRest></TheRest>
      <IPhoneBottomClaim></IPhoneBottomClaim>
      <HomeFooter></HomeFooter>
    </div>
  );
}

export default BuyPage;
