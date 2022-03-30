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
      return i <= 8 ? (
        <div className="w-12/12 ml-64 box-border" key={anime.id}>
          <TrendingAnime
            title={anime.attributes.slug}
            synopsis={anime.attributes.synopsis}
            posterImage={anime.attributes.posterImage.large}
            clicked={() => this.postSelectedHandler(anime.id)}
          />
        </div>
      ) : (
        ""
      );
    });
    return (
      <div>
        <div className="h-full w-full md:flex hidden ">
          <span className="text-xl text-gray-400 font-bold  relative left-[150px]">
            Trending
          </span>
          <section className="flex row overflow-auto w-full rounded-r-full  box-border">
            {animes}
          </section>
        </div>

        <section>
          <AnimeDetails id={this.state.selectedPostId} />
        </section>
      </div>
    );
  }
}

export default Trending;
