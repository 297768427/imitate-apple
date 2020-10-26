import React, { useRef, useState } from "react";
import "../css/homeNavCss.css";
import useOutsideClick from "../methods/outsideClick";
import appleIcon from "../images/appleIcon.png";
import searchIcon from "../images/searchIcon.png";
import bagIcon from "../images/bagIcon.png";
import crossIcon from "../images/crossIcon.png";
import bagAccountIcon from "../images/bagAccountIcon.png";
import bagFavouritesIcon from "../images/bagFavouritesIcon.png";
import bagBagIcon from "../images/bagBagIcon.png";
import bagSignInIcon from "../images/bagSignInIcon.png";
import bagOrdersIcon from "../images/bagOrdersIcon.png";

function HomeNav() {
  const [searchBarState, setSearchBarState] = useState(false);
  const [searchBarInput, setsearchBarInput] = useState("");
  const [productsInBag, setProductsInBag] = useState([]);
  const [bagState, setBagState] = useState(false);

  let searchBar = useRef(null);
  let popUp = useRef(null);

  const showSearchBar = () => {
    // set state wont execute in no seconds, it need time, so the action after can use setTimeOut to implement
    setSearchBarState(true);
    setTimeout(() => {
      searchBar.current.focus();
    }, 100);
  };

  const searchBarLostFocus = () => {
    setSearchBarState(false);
    setsearchBarInput("");
  };

  const enterTriggerSearch = e => {
    let code = e.keyCode || e.which;
    if (code == 13) {
      search();
    }
  };

  const showHideBag = () => {
    setBagState(!bagState);
  };

  useOutsideClick(popUp, () => {
    if (bagState == true) {
      setBagState(false);
    }
  });

  const search = () => {
    console.log(searchBarInput);
  };
  return (
    <div className="homeNav ">
      <div className={searchBarState ? "searchDivShow" : "searchDiv"}>
        <img
          id="searchIconBesideSearchInput"
          src={searchIcon}
          onMouseDown={() => {
            search();
          }}
        ></img>
        <input
          value={searchBarInput}
          ref={searchBar}
          placeholder="Search about apple"
          onBlur={() => searchBarLostFocus()}
          onChange={e => setsearchBarInput(e.target.value)}
          onKeyPress={e => enterTriggerSearch(e)}
        ></input>
        <img id="crossIcon" src={crossIcon}></img>
      </div>
      <div className="navDiv">
        <ul>
          <li id={searchBarState ? "appleIconLiGone" : "appleIconLi"}>
            <a href="/">
              <img id="appleIcon" src={appleIcon}></img>
            </a>
          </li>
          <li id={searchBarState ? "MacLiGone" : "MacLi"}>
            <a href="/">Mac</a>
          </li>
          <li id={searchBarState ? "ipadLiGone" : "ipadLi"}>
            <a href="/iPad">iPad</a>
          </li>
          <li id={searchBarState ? "iphoneLiGone" : "iphoneLi"}>
            <a href="/iPhone">iPhone</a>
          </li>
          <li id={searchBarState ? "WatchLiGone" : "WatchLi"}>
            <a href="/">Watch</a>
          </li>
          <li id={searchBarState ? "TVLiGone" : "TVLi"}>
            <a href="/">TV</a>
          </li>
          <li id={searchBarState ? "MusicLiGone" : "MusicLi"}>
            <a href="/">Music</a>
          </li>
          <li id={searchBarState ? "SupportLiGone" : "SupportLi"}>
            <a href="/">Support</a>
          </li>

          <li id={searchBarState ? "searchIconLiGone" : "searchIconLi"}>
            <img
              id="searchIcon"
              src={searchIcon}
              onClick={() => showSearchBar()}
            ></img>
          </li>
          <li id={searchBarState ? "bagIconLiGone" : "bagIconLi"}>
            <img
              id="bagIcon"
              src={bagIcon}
              onClick={() => {
                showHideBag();
              }}
            ></img>
          </li>
        </ul>
      </div>
      <div className={bagState ? "bagPopUpShow" : "bagPopUp"} ref={popUp}>
        <div className="productsInBag">
          <span>
            {productsInBag.length !== 0 ? "something" : "Your Bag is empty"}
          </span>
        </div>
        <div className="navInBag">
          <hr></hr>
          <img src={bagBagIcon}></img>
          <a href="/">Bag</a>
          <hr></hr>
          <img src={bagFavouritesIcon}></img>
          <a href="/">Favourites</a>
          <hr></hr>
          <img src={bagOrdersIcon}></img>
          <a href="/">Orders</a>
          <hr></hr>
          <img src={bagAccountIcon}></img>
          <a href="/">Account</a>
          <hr></hr>
          <img src={bagSignInIcon}></img>
          <a href="/sign_in">Sign in</a>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default HomeNav;
