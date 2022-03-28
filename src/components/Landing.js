import React from "react";
import { NavLink } from "react-router-dom";
import landingImg from "../img/landing.jpg";
import NavBar from "./header/NavBar";
import Trending from "./main/Trending";
const Landing = () => {
  return (
    <div className="h-full">
      <div>
        <NavBar />
        <Trending />
      </div>
    </div>
  );
};

export default Landing;
