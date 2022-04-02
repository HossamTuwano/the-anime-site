import React from "react";

const Details = (props) => {
  return (
    <div>
      Details
      <section>
        {props.loadedAnime} <p>{props.id}</p>
      </section>
    </div>
  );
};

export default Details;
