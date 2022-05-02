import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

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
    let startDate = animeDetails.attributes.startDate;
    let startDateArr = startDate.split("-");
    let startDateString = new Date(
      `${startDateArr[1]}, ${startDateArr[2]}, ${startDateArr[0]}`
    )
      .toDateString()
      .split(" ")
      .slice(1)
      .join(" ");

    let endDate = animeDetails.attributes.endDate;
    let endDateArr = endDate === null ? "" : endDate.split("-");
    let endDateString = new Date(
      `${endDateArr[1]}, ${endDateArr[2]}, ${endDateArr[0]}`
    )
      .toDateString()
      .split(" ")
      .slice(1)
      .join(" ");

    const attributes = animeDetails.attributes;
    const bgImg = animeDetails.attributes.posterImage.large;

    viewDetails = (
      <div className="w-full absolute top-0">
        <div className="w-full h-full absolute opacity-80">
          <img
            src={bgImg}
            alt={`${bgImg}`.toString()}
            className="blur-xl h-full w-full brightness-50  bg-repeat-y"
          />
        </div>

        <div className="flex flex-col">
          <div className="w-[130px] h-[200px] z-900 absolute top-[180px] left-[125px] shadow-xl">
            <img
              src={bgImg}
              alt={bgImg}
              className="w-full h-full brightness-95"
            />
          </div>

          <div className="flex justify-center mt-[390px] text-lg font-black  text-center  text-black">
            {attributes.titles.en}
          </div>

          <div className="flex justify-center items-center">
            <div className="mr-2">{attributes.ageRating}</div>
            <div className="bg-black rounded-full w-1 h-1 mr-2"></div>
            <div className="mr-2">{attributes.subtype}</div>
            <div className="bg-black rounded-full w-1 h-1 mr-2"></div>
            <div className="mr-2">
              <TrendingUpIcon fontSize="medium" color="success" />{" "}
              {attributes.popularityRank}
            </div>

            {attributes.episodeLength ? (
              <div className="flex items-center">
                {" "}
                <div className="bg-black rounded-full w-1 h-1 mr-2"> </div>{" "}
                <div className="text-center">
                  {attributes.episodeLength + "m"}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="mt-4 py-4 px-2 border-t">
          {/* <div className="flex justify-center ">
            <div className="border w-[350px] h-16">
              <img
                src={`https://img.youtube.com/vi/${attributes.youtubeVideoId}/mqdefault.jpg`}
                alt=""
                className="w-full h-full bg-top bg-no-repeat"
              />
            </div>
          </div> */}
          <div className="">
            <div className="">Synopis</div>
            {attributes.synopsis}
          </div>

          <div className="mt-2">
            <div>
              Aired:&nbsp;{startDateString}&nbsp;to&nbsp;
              {endDateString}
            </div>
            <div>Episodes:&nbsp;{attributes.episodeCount}</div>
            <div>Status:&nbsp;{attributes.status}</div>
          </div>
        </div>
      </div>
    );
  }
  return viewDetails;
}

export default AnimeDetails;
