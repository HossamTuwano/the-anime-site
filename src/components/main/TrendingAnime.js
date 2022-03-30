import React from "react";

const TrendingAnime = (props) => {
  return (
    // styles inside the card
    <article
      className="max-w-xl max-h-xl shadow-lg rounded-lg border h-[20rem] w-[14rem] mt-5 mr-[-100rem]  drop-shadow-lg cursor-pointer"
      onClick={props.clicked}
    >
      <div className="h-full">
        <div className="h-full z-0">
          <img
            className="bg-cover bg-center bg-no-repeat h-full brightness-90 "
            src={props.posterImage}
            alt={`${props.posterImage}`.toString()}
          />
        </div>
      </div>
    </article>
  );
};

export default TrendingAnime;
