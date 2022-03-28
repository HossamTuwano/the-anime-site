import { ChatTwoTone, Notifications, Search } from "@mui/icons-material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "@mui/material";

const NavBar = () => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="md:flex w-full  py-8 px-7 lg:visible">
      <div className="flex  border w-full py-5  shadow-md align-middle ">
        <div className="flex justify-between w-full px-9 ">
          <div className="uppercase ">
            <Link to="/">
              {" "}
              <span className="border px-4 py-3 rounded-md text-black mr-2 ">
                otaku
              </span>{" "}
              senpai
            </Link>
          </div>

          <div className="text-gray-400 lg:text-xl md:flex lg:items-center mr-52">
            <span className="">
              <Search className="mr-2" />{" "}
            </span>
            <form
              action=""
              onSubmit={(e) =>
                setSearch([search + e.target.value, e.preventDefault()])
              }
            >
              <div className="w-full  text-left ">
                {" "}
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setValue(value + e.target.value)}
                  name="search"
                  className="px-2 w-96"
                  autoComplete="off"
                  style={{ outline: "none", border: "none" }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
