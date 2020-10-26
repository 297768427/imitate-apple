import React, { useState } from "react";
import "../css/Sign_inCss.css";

function Sign_in() {
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const [IDfocus, setIDfocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const setIDtrue = () => {
    setIDfocus(true);
    setPasswordFocus(false);
  };

  const setIDfalse = () => {
    setIDfocus(false);
  };

  const setPasswordTrue = () => {
    setPasswordFocus(true);
    setIDfocus(false);
  };

  const setPasswordFalse = () => {
    setPasswordFocus(false);
  };

  const handleChange = e => {
    if (e.currentTarget.name === "id") {
      setID(e.currentTarget.value);
    } else if (e.currentTarget.name === "password") {
      setPassword(e.currentTarget.value);
    }
  };

  return (
    <div className="sign_inDiv">
      <h1>Please sign in.</h1>
      <div className="sign_inFormDiv">
        <div
          className={IDfocus ? "sign_inFormEachDivFocus" : "sign_inFormEachDiv"}
        >
          <label
            className={
              IDfocus || ID
                ? "sign_inFormEachLabelFocus"
                : "sign_inFormEachLabel"
            }
          >
            Apple ID
          </label>
          <input
            onBlur={() => setIDfalse()}
            onFocus={() => setIDtrue()}
            onChange={e => handleChange(e)}
            name="id"
          ></input>
        </div>
        <div
          className={
            passwordFocus ? "sign_inFormEachDivFocus" : "sign_inFormEachDiv"
          }
        >
          <label
            className={
              passwordFocus || password
                ? "sign_inFormEachLabelFocus"
                : "sign_inFormEachLabel"
            }
          >
            Password
          </label>
          <input
            type="password"
            onBlur={() => setPasswordFalse()}
            onFocus={() => setPasswordTrue()}
            onChange={e => handleChange(e)}
            name="password"
          ></input>
        </div>
        <p>
          Your Apple ID is the email address you use to sign in to iTunes, the
          App Store and iCloud.
        </p>
        <button className="sign_inFormButton">Sign In</button>
        <a href="/">Forgotten your Apple ID or password?</a>
        <br></br>
        <a href="/">Don't have an Apple ID? Create one now.</a>
      </div>
      <div className="sign_inFooterDiv">
        <hr></hr>
        <h5>
          Need more help?<a href="/">Chat now</a> or call 133‑622.
        </h5>
      </div>
    </div>
  );
}

export default Sign_in;
