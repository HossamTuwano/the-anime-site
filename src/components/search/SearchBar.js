import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";
import axios from "axios";

const SearchBar = (props) => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const fetchSearch = (query) => {
    axios
      .get(
        `https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc$limit=10`
      )
      .then((res) => res.data)
      .then((res) => setSearchResult(res.data));
    console.log(searchResult);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchSearch(search);
  };

  return (
    <div>
      <div className="rounded-md h-9 flex items-center px-2 border-2 w-[300px] md:border-none ">
        <span className="" onClick={handleSearch}>
          <Link to="search">
            <Search className="text-[#707070]" />{" "}
          </Link>
        </span>
        <form action="" onSubmit={handleSearch} className=" w-[250px]">
          <input
            type="text"
            className="w-[250px] h-full px-2 md:focus:border-b-2 outline-none md:hover:border-b-2   text-[#707070]"
            placeholder="Search"
            autoComplete="off"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
