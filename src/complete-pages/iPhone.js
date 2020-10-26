import React from "react";
import IphoneNav from "./../components/forIphone/iPhoneNav";
import IPhoneiPhone11Pro from "./../components/forIphone/iPhoneiPhone11Pro";
import IPhoneiPhone11Series from "./../components/forIphone/iPhoneiPhone11Series";
import FourIphones from "./../components/forIphone/iPhoneFourIphones";
import IPhoneAccessories from "./../components/forIphone/iPhoneAccessories";
import IPhoneIwatch from "./../components/forIphone/iPhoneIwatch";
import IPhoneTwoSections from "./../components/forIphone/iPhoneTwoSections";
import IPhoneBottomClaim from "./../components/forIphone/iPhoneBottomClaim";
import HomeFooter from "./../components/forHome/homeFooter";

function IPhone() {
  return (
    <div>
      <IphoneNav></IphoneNav>
      <IPhoneiPhone11Pro></IPhoneiPhone11Pro>
      <IPhoneiPhone11Series></IPhoneiPhone11Series>
      <FourIphones></FourIphones>
      <IPhoneAccessories></IPhoneAccessories>
      <IPhoneIwatch></IPhoneIwatch>
      <IPhoneTwoSections></IPhoneTwoSections>
      <IPhoneBottomClaim></IPhoneBottomClaim>
      <HomeFooter></HomeFooter>
    </div>
  );
}

export default IPhone;
