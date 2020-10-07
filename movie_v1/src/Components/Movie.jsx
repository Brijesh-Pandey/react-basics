import React from "react";
import "./Movie.css";

export default function Movie(props) {
  const { name, rating, cast, id } = props.pro;
  const { onDelete } = props;
  return (
    <div className="movieContainer">
      <div className="title"> {name}</div>
      <div>
        <span className="star">&#9733;</span> {rating}
      </div>
      <div>Cast:- {cast}</div>
      <div className="buttonContainer">
        <button className="button" onClick={() => onDelete(id)}>
          {" "}
          DELETE{" "}
        </button>
      </div>
    </div>
  );
}
