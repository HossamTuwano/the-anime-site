import React from "react";

const TrendingAnime = (props) => {
  return (
    // styles inside the card
    <article className="" onClick={props.clicked}>
      <div className="w-44 z-0">
        <img
          className="w-full bg-cover bg-no-repeat bg-center rounded-md h-90"
          src={props.posterImage}
          alt={`${props.posterImage}`.toString()}
        />
      </div>
    </article>
  );
};

export default TrendingAnime;
