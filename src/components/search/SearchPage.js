import React from "react";
import { Card, CardMedia } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";

function SearchPage(props) {
  return (
    <div>
      {props.searchResult.map((result) => (
        <figure key={result.mal_id} className="flex py-2 mb-2 px-4">
          <div className=" w-28 h-[150px] mr-4">
            <img
              src={result.images.webp.large_image_url}
              alt=""
              className="h-full bg-cover bg-center bg-no-repeat w-full rounded-md"
            />
          </div>

          <div className=" w-[250px] py-5">
            <figcaption className="">
              <a href={result.url}>
                {" "}
                <div className="text-md font-medium md:text-ellipsis truncate w-[240px]  ">
                  {result.title.includes("-")
                    ? result.title.slice(0, result.title.indexOf("-"))
                    : result.title}
                  {/* {`${result.title}`} */}
                </div>{" "}
              </a>
              <div>
                {result.genres.map((genre) => (
                  <span
                    className="text-xs"
                    key={genre.mal_id}
                  >{`${genre.name}, `}</span>
                ))}
              </div>
              <div className="flex justify-between w-[135px] mt-1">
                {!result.year ? (
                  ""
                ) : (
                  <div className="border px-3 text-sm rounded-l-full rounded-r-full">
                    {result.year}
                  </div>
                )}{" "}
                <div className="border px-3 text-sm rounded-l-full rounded-r-full">
                  {result.rating.includes("Children")
                    ? result.rating.replace("PG - Children", "PG")
                    : result.rating.slice(0, 6).length === 6 &&
                      result.rating.includes("1")
                    ? result.rating.slice(0, 6)
                    : result.rating.slice(0, 8)}
                  {/* {`${result.rating}`.slice(0, 6)} */}
                </div>
              </div>
              <div className="flex w-52 mt-2">
                <div className="border flex items-center px-2  rounded-l-full rounded-r-full mr-2">
                  <StarIcon fontSize="sm" className="text-[#ffc400] mr-2" />
                  <div className="text-sm">
                    {Number(result.score).toFixed(1)}
                  </div>
                </div>
                <div className="px-3 rounded-l-full rounded-r-full border flex items-center ">
                  <div className="text-center">
                    <AccessTimeIcon fontSize="sm" className="mr-1 pb-1" />
                  </div>
                  <div className="text-sm">{result.duration}</div>
                </div>
              </div>
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
}

export default SearchPage;
