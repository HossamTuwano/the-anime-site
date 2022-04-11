import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function AnimeDetails(props) {
  const [animeDetails, setAnimeDetails] = useState([]);

  useEffect(() => {
    if (props.id) {
      axios
        .get("https://kitsu.io/api/edge/anime/" + props.id)
        .then((res) => res.data)
        .then((res) => setAnimeDetails(res.data));
    }
  }, []);

  let viewDetails = <div>your shit here</div>;

  if (!props.id) {
    viewDetails = <div>Loading...!</div>;
  }

  if (animeDetails.length !== 0) {
    viewDetails = <div>{animeDetails.attributes.slug}</div>;
  }
  return viewDetails;
}

export default AnimeDetails;
