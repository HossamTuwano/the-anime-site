import { ChatTwoTone, Notifications, Search } from "@mui/icons-material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="flex absolute top-0 py-9 px-24 justify-between w-[115rem]  font-sans">
      <div className="text-def text-2xl">
        <Link to="/">Anime Site</Link>
      </div>

      <div className=" w-[20rem] flex justify-around ">
        {" "}
        <Link to="/trending" className="text-def text-2xl">
          Trending
        </Link>
        <Link to="/trending" className="text-def text-2xl">
          Wiki
        </Link>
      </div>

      <div className="text-[#e1990a] text-xl flex items-center ">
        <Search className="" />

        <form
          action=""
          onSubmit={(e) =>
            setSearch([search + e.target.value, e.preventDefault()])
          }
        >
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setValue(value + e.target.value)}
            name="search"
            className="text-[#e1990a] bg-inherit px-3 appearance-none w-[20rem] mr-9 outline-none border-b-1 border-b-[#e1990a]"
            autoComplete="off"
            style={{ outline: "none", border: "none" }}
          />
        </form>
      </div>
    </div>
  );
};

export default NavBar;
