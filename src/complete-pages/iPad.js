import React from "react";
import IPadNav from "./../components/forIpad/iPadNav";
import IPadFourRows from "./../components/forIpad/iPadFourRows";
import IPadFourIpads from "./../components/forIpad/iPadFourIpads";
import IPadThreeSections from "./../components/forIpad/iPadThreeSections";
import IPadEssentials from "./../components/forIpad/iPadEssentials";
import IPadWhyIpad from "./../components/forIpad/iPadWhyIpad";
import IPhoneBottomClaim from "./../components/forIphone/iPhoneBottomClaim";
import HomeFooter from "./../components/forHome/homeFooter";

function IPad() {
  return (
    <div>
      <IPadNav></IPadNav>
      <IPadFourRows></IPadFourRows>
      <IPadFourIpads></IPadFourIpads>
      <IPadThreeSections></IPadThreeSections>
      <IPadEssentials></IPadEssentials>
      <IPadWhyIpad></IPadWhyIpad>
      <IPhoneBottomClaim></IPhoneBottomClaim>
      <HomeFooter></HomeFooter>
    </div>
  );
}

export default IPad;
