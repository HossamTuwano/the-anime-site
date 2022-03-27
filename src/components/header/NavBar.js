import { Search } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const NavBar = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex absolute top-0 py-9 px-24 justify-between w-full">
      <div className="text-white text-xl">
        <Link to="/">Anime Site</Link>
      </div>

      <div className="text-white text-xl flex items-center">
        <Search />
        <input
          type="text"
          className="border-none bg-none bg-inherit outline-none text-white"
          placeholder="Search..."
          onChange={(e) => setValue(value + e.target.value)}
          name="search"
        />
      </div>
    </div>
  );
};

export default NavBar;
