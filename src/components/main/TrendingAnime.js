import React from "react";

const TrendingAnime = (props) => {
  return (
    // styles inside the card
    <article
      className="max-w-xl max-h-xl; shadow-lg rounded-lg border h-[40rem] w-[25rem] mt-[10rem] mr-[-20rem]  drop-shadow-lg cursor-pointer"
      onClick={props.clicked}
    >
      <div className="h-full">
        <div className="h-full z-0">
          <img
            className="bg-cover bg-center bg-no-repeat h-full brightness-50 "
            src={props.posterImage}
            alt={`${props.posterImage}`.toString()}
          />
        </div>

        <div className="text-left px-2 h-[20rem]  mt-[-20rem] block z-10 text-[#f3e2ef] text-bold font-mono antialiased none-italic break-words text-ellipsis overflow-hidden brightness-100">
          <p className="mb-4 text-5xl font-black">
            {`${props.title}`.split("-").join("\t")}
          </p>

          <p className="text-ellipsis text-2xl ">{props.synopsis}</p>
        </div>
      </div>
    </article>
  );
};

export default TrendingAnime;
// overflow-hidden shadow-lg border-2 h-4/6 border-blue-900 w-96 absolute flex space-between
