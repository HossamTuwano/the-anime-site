import React from "react";
import "../css/Trending.css";

const Animes = (props) => {
  const attributes = props.trendingAnime.attributes;

  return (
    <article className="flex overflow-auto" onClick={props.clicked}>
      <div className="w-44 z-0 ">
        <img
          className="w-full bg-cover bg-no-repeat bg-center rounded-md h-90"
          src={attributes.posterImage.large}
          alt={`${attributes.posterImage.large}`.toString()}
        />
      </div>
    </article>
  );
};

export default Animes;
