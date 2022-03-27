import React, { Component } from "react";
import axios from "axios";

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
        <div>
          <h1>{data.slug}</h1>
          <p>{data.synopsis}</p>
        </div>
      );
    }
    return viewDetails;
  }
}

export default AnimeDetails;
