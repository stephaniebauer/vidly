import React from "react";
import Movies from "./movies";

const MovieForm = ({ match, history }) => {
  return (
    <div className="container">
      <h1>Movie Form {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
