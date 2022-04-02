import React from "react";
import axios from "axios";
import TrendingAnime from "./TrendingAnime";
import "../../css/Trending.css";
import AnimeDetails from "./AnimeDetails";
import { Link, Routes, Route } from "react-router-dom";

class Trending extends React.Component {
  state = {
    trendingAnime: [],
    selectedPostId: null,
  };

  componentDidMount() {
    console.log("did mount " + this.props);
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
    // console.log("here" + this.props);
    const animes = this.state.trendingAnime.map((anime, i) => {
      return i <= 90 ? (
        <Link to={"/" + anime.id} key={anime.id} className="full mr-3">
          <TrendingAnime
            posterImage={anime.attributes.posterImage.large}
            clicked={() => this.postSelectedHandler(anime.id)}
          />{" "}
        </Link>
      ) : (
        ""
      );
    });

    return (
      <>
        <div className="w-full">
          <div className="px-3">Trending</div>
          <section className="flex w-full overflow-auto py-3 px-4">
            {animes}
          </section>
        </div>

        {/* <section>
          {" "}
          <AnimeDetails id={this.state.selectedPostId} />
        </section> */}
      </>
    );
  }
}

export default Trending;
