import { Fragment } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Progress from "./components/header/Progress";
import Animes from "./components/Animes";
import { useState, useEffect } from "react";
import Otaku from "./components/Otaku";
import NavBar from "./components/header/NavBar";
import axios from "axios";
import AnimeDetails from "./components/main/AnimeDetails";
import SearchPage from "./components/search/SearchPage";
function App(props) {
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
    <div className="md:h-auto md:w-full md:box-border font-rubik">
      {/* <img
          className="min-h-full min-w-[1024px] w-full height-auto fixed top-0 left-0"
          src={bg}
          alt=""
        /> */}
      {/* <Progress /> */}
      <div className="">
        <BrowserRouter>
          {/* <Animes /> */}
          <NavBar
            handleSearch={handleSearch}
            search={search}
            setSearch={setSearch}
          />
          <Routes>
            <Route path="/" element={<Otaku />}></Route>
            <Route index element={<Animes />} />
            <Route path="/:id" element={<AnimeDetails />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
