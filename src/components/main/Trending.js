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
        <div className="w-12/12 ml-96 flex justify-between box-border">
          <TrendingAnime
            key={anime.id}
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
        <div className="h-full w-full py-11 ">
          <span className="absolute top-[80rem] left-[25rem] text-5xl font-extrabold text-[#f3e2ef] ">
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
