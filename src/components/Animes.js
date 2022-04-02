import React from "react";
import { NavLink } from "react-router-dom";
import landingImg from "../img/landing.jpg";
import NavBar from "./header/NavBar";
import AnimeDetails from "./main/AnimeDetails";
import { Routes, Route } from "react-router-dom";
import Trending from "./main/Trending";
const Landing = (props) => {
  return (
    <div className="h-full">
      <div>
        <Trending />
      </div>
    </div>
  );
};

export default Landing;
