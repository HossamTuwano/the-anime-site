import React from "react";
import { NavLink } from "react-router-dom";
import landingImg from "../img/landing.jpg";
import NavBar from "./header/NavBar";
import Trending from "./main/Trending";
const Landing = () => {
  return (
    <div className="h-full">
      <div className=" text-white ml-48 flex top-72 absolute ">
        <div className="flex row mr-12 mt-6 flex-col">
          {/* <div></div> */}
          <span className="border h-24 mb-4 rounded-t-full rounded-b-full w w-2 bg-"></span>
          <span className="border h-24 mb-4 rounded-t-full rounded-b-full w w-2 "></span>
          <span className="border h-24 mb-4 rounded-t-full rounded-b-full w w-2 "></span>

          {/* <span className="border h-96 mb-4 "></span>
          <span className="border h-96 mb-4  "></span> */}
        </div>
        <div>
          <div className="text-9xl"> </div>
        </div>
      </div>
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
