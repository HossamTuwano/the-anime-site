import {
  ChatTwoTone,
  Notifications,
  Search,
  SettingsInputHdmiTwoTone,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";

const NavBar = (props) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handelSearch = () => {
    setShowSearch(true);
  };

  return (
    <div className="mb-4 md:flex md:justify-between md:px-3 md:border md:shadow-md md:items-center z-9999">
      {/* responsie */}
      <div className="flex border-box justify-between items-center py-5 px-3">
        <div className="uppercase">
          <Link to="/">
            {" "}
            <span className="border px-4 py-3 rounded-md text-black mr-2 text-center ">
              otaku
            </span>{" "}
            senpai
          </Link>
        </div>

        <div className="md:hidden flex z-999999">
          <div className="mr-4 searchBtn" onClick={handelSearch}>
            <Search />
          </div>
          <div>
            <MenuIcon />
          </div>
        </div>
      </div>
      {/* desktop */}

      {showSearch && (
        <div className="md:w-[300px] w-full  mt-2 text-center flex justify-center">
          <div className="rounded-md h-9 flex items-center px-2 border-2 w-[300px] md:border-none ">
            <span className="" onClick={props.handleSearch}>
              <Link to={`search`}>
                <Search className="text-[#707070]" />{" "}
              </Link>
            </span>
            <form
              className=" w-[250px]"
              // onSubmit={props.handleSearch}
              // onSubmit={onSubmition}
            >
              <input
                type="text"
                className="w-[250px] h-full px-2 md:focus:border-b-2 outline-none md:hover:border-b-2   text-[#707070] bg-inherit"
                placeholder="Search"
                autoComplete="off"
                value={props.search}
                onChange={(e) => props.setSearch(e.target.value)}
              />
              <Link to="/search">
                <button onSubmit={props.handleSearch} type="submit"></button>
              </Link>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
