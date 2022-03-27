import React from "react";
import landingImg from "../img/landing.jpg";
import NavBar from "./header/NavBar";
import Trending from "./main/Trending";
const Landing = () => {
  return (
    <div className="h-full">
      <div className=" bg-cover bg-center bg-no-repeat bg-clip-text">
        <img src={landingImg} alt="pain as the background" />
      </div>
      <div>
        <NavBar />
      </div>
      <div className="h-full w-full box-border ">
        <Trending />
      </div>
    </div>
  );
};

export default Landing;
