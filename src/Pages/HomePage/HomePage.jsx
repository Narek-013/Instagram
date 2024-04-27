import React, { useEffect, useState } from "react";
import HomePageRightPar from "./HomePageComponents/HomePageRightPar/HomePageRightPar";
import HomePageCenter from "./HomePageComponents/HomePageCenter/HomePageCenter";
import "./HomePage.css";

const HomePage = () => {

  return (
    <div className="HomePage">
      <div className="HomeCenterAndRight">
        <HomePageCenter />
        <HomePageRightPar />
      </div>
    </div>
  );
};

export default HomePage;
