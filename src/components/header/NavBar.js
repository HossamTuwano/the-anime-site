import { ChatTwoTone, Notifications, Search } from "@mui/icons-material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="md:flex">
      {/* responsie */}
      <div className="md:hidden flex border-box justify-between items-center py-5 px-3">
        <div className="uppercase">
          <Link to="/">
            {" "}
            <span className="border px-4 py-3 rounded-md text-black mr-2 text-center ">
              otaku
            </span>{" "}
            senpai
          </Link>
        </div>

        <div>
          <MenuIcon />
        </div>
      </div>
      {/* desktop */}
      <div className="md:flex w-full hidden mb-5">
        <div className="flex border w-full py-5 shadow-md  items-center px-3 ">
          <div className="flex justify-between w-full  ">
            {/* logo */}
            <div className="uppercase ">
              <Link to="/">
                {" "}
                <span className="border px-4 py-3 rounded-md text-black mr-2 ">
                  otaku
                </span>{" "}
                senpai
              </Link>
            </div>

            {/* search */}

            <div className="text-gray-400 flex item-center ">
              <span className="">
                <Search className="mr-2" />{" "}
              </span>
              <form
                action=""
                onSubmit={(e) =>
                  setSearch([search + e.target.value, e.preventDefault()])
                }
              >
                <div className="active:border-b-2 hover:border-b-2 w-96 ">
                  {" "}
                  <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setValue(value + e.target.value)}
                    name="search"
                    className="px-2 text-lg"
                    autoComplete="off"
                    style={{ outline: "none", border: "none" }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
