import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Animes from "./components/Animes";
import { useState, useEffect } from "react";
import Otaku from "./components/Otaku";
import NavBar from "./components/header/NavBar";
import axios from "axios";
import AnimeDetails from "./components/main/AnimeDetails";
import SearchPage from "./components/search/SearchPage";
function App(props) {
  const [search, setSearch] = useState("");
  const [selectedPostId, setSelectedPostId] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loadTrendingAnime, setLoadTrendingAnime] = useState([]);
  const [animeDetails, setAnimeDetails] = useState([]);

  useEffect(() => {
    const fetchTrending = () => {
      axios
        .get("https://kitsu.io/api/edge/trending/anime")
        .then((res) => res.data)
        .then((res) => setLoadTrendingAnime(res.data));
    };

    fetchTrending();
  }, []);

  const fetchSearch = (query) => {
    axios
      .get(
        `https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc$limit=10`
      )
      .then((res) => res.data)
      .then((res) => setSearchResult(res.data));
  };

  const trendingAnime = loadTrendingAnime.map((trendingAnimes) => {
    return (
      <Link to="animed" key={trendingAnimes.id} className="ml-3 w-full">
        <Animes
          trendingAnime={trendingAnimes}
          clicked={() => handleAnimeDetails(trendingAnimes.id)}
        />
      </Link>
    );
  });

  const details = animeDetails.map((detail) => {
    return (
      <div key={detail.id} className="">
        <AnimeDetails details={detail} id={detail.id} />
      </div>
    );
  });

  const handleSearch = (e) => {
    e.preventDefault();
    fetchSearch(search);
  };

  const handleAnimeDetails = (id) => {
    setSelectedPostId(id);
    console.log(selectedPostId);
  };

  return (
    <div className="md:h-auto md:w-full md:box-border font-rubik">
      <div className="">
        <BrowserRouter>
          <NavBar
            handleSearch={handleSearch}
            search={search}
            setSearch={setSearch}
          />
          <Routes>
            <Route path="/" element={<Otaku />}></Route>
            <Route
              index
              element={
                <section className="flex w-full overflow-auto">
                  {trendingAnime}
                </section>
              }
            />
            <Route
              path="/animed"
              element={<AnimeDetails id={selectedPostId} />}
            />
            <Route
              path="/search"
              element={<SearchPage searchResult={searchResult} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
