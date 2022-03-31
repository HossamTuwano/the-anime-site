import React from "react";
import axios from "axios";
import TrendingAnime from "./TrendingAnime";
import "../../css/Trending.css";
import AnimeDetails from "./AnimeDetails";
import { Link } from "react-router-dom";

class Trending extends React.Component {
  state = {
    trendingAnime: [],
    selectedPostId: null,
  };

  componentDidMount() {
    axios
      .get("https://kitsu.io/api/edge/trending/anime")
      .then((res) => res.data)
      .then((res) => {
        this.setState({ trendingAnime: res.data });
      });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    const animes = this.state.trendingAnime.map((anime, i) => {
      return i <= 90 ? (
        <div key={anime.id} className="full mr-3">
          <TrendingAnime posterImage={anime.attributes.posterImage.large} />{" "}
        </div>
      ) : (
        ""
      );
    });

    return (
      <div className="w-full">
        <div className="px-3">Trending</div>
        <section className="flex w-full overflow-auto py-3 px-4">
          {animes}
        </section>
        {/* <div className="h-full w-full flex mt-5 border-2 border-yellow-400 ">
          <span className="text-xl text-gray-400 font-bold relative left-[150px]">
            Trending
          </span>
        

       */}
      </div>
    );
  }
}

export default Trending;
