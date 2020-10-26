import React from "react";
import { Route } from "react-router-dom";
import Home from "./complete-pages/home";
import HomeNav from "./components/Nav";
import IPhone from "./complete-pages/iPhone";
import IPad from "./complete-pages/iPad";
import IPad_iPadPro from "./complete-pages/iPad_iPadPro";
import IPhone_iPhone11Pro from "./complete-pages/iPhone_iPhone11Pro";
import Sign_in from "./complete-pages/sign_in";
import BuyPage from "./complete-pages/buyPage";
function App() {
  return (
    <div className="App">
      <HomeNav></HomeNav>
      <Route path="/" exact component={Home}></Route>
      <Route path="/iPhone" exact component={IPhone}></Route>
      <Route path="/iPad" exact component={IPad}></Route>
      <Route path="/iPad_iPadPro" exact component={IPad_iPadPro}></Route>
      <Route
        path="/iPhone_iPhone11Pro"
        exact
        component={IPhone_iPhone11Pro}
      ></Route>
      <Route path="/sign_in" exact component={Sign_in}></Route>
      <Route path="/buy" exact component={BuyPage}></Route>
    </div>
  );
}

export default App;
