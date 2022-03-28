import React, { Component } from "react";
import axios from "axios";
import { TrendingUpTwoTone } from "@mui/icons-material";

export class AnimeDetails extends Component {
  state = {
    loadedAnime: null,
  };
  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadedAnime ||
        (this.state.loadedAnime && this.state.loadedAnime.id !== this.props.id)
      ) {
        axios
          .get("https://kitsu.io/api/edge/anime/" + this.props.id)
          .then((res) => res.data)
          .then((res) =>
            this.setState({
              loadedAnime: res.data,
            })
          );
      }
    }
  }
  render() {
    let viewDetails = <div></div>;

    // console.log(this.props.id);

    if (this.props.id) {
      viewDetails = <div>Loading...!</div>;
    }

    if (this.state.loadedAnime) {
      let data = this.state.loadedAnime.attributes;
      viewDetails = (
        <div className="border flex ">
          <div className="fixed w-full border-2 ">
            <img src={data.coverImage.original} alt="" />
          </div>
          {console.log(data.coverImage.original)}
          {/* left side */}
          <div className="border-r  py-20 width-[300rem]  px-32 flex justify-between ">
            {/* img */}
            <div className="mr-6">
              <div className="  w-[12rem] h-[20rem] ">
                <img
                  src={data.posterImage.original}
                  alt=""
                  className="w-full "
                />
              </div>
            </div>{" "}
            {/* details */}
            <div className="">
              {/* title */}
              <h1 className="mb-3 text-7xl text-">{data.slug}.split("-")</h1>
              {/* details */}
              <div className="mb-3">
                <span className="mr-2">{data.ageRating}</span>
                <span className="mr-2">{data.subtype}</span>
                <span className="mr-2">{data.ageRatingGuide}</span>
              </div>

              {/* buttons */}
              <div className="mb-3">
                <button className="rounded-full border  py-2 px-6 mr-4">
                  Watch Now
                </button>
                <button className="rounded-full border  py-2 px-6">
                  Add to List
                </button>
              </div>

              {/* description */}
              <div className=" ">
                <p className="   break-all">{data.synopsis}</p>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="w-[150rem] min-w-[30rem] py-20 px-12 flex flex-col">
            {/* japanese */}
            <div>
              {" "}
              <span className="mb-3 text-xl font-bold mr-3">Japanese:</span>
              <span> {data.slug}</span>
            </div>
            <div>
              {" "}
              <span className="mb-3 text-xl font-bold mr-3">Synonyms:</span>
              <span>{data.titles.en}</span>
            </div>
            <div>
              <span className="mb-3 text-xl font-bold mr-3">Aired:</span>
              <span> {data.startDate}</span>
            </div>
            <div>
              {" "}
              <span>
                {" "}
                <TrendingUpTwoTone />{" "}
              </span>
              <span className="mb-3 text-xl font-bold mr-3">
                Popularity:
              </span>{" "}
              <span> {data.popularityRank}</span>
            </div>
          </div>
        </div>
      );
    }
    return viewDetails;
  }
}

export default AnimeDetails;
