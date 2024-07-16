import React, { useEffect, useState } from "react";
import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../MoviePage/movieSlice";
import { createSelector } from "reselect";


export const Search = () => {
  const [movieName, setMovieName] = useState("Spider");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies(movieName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieName]);

  const updatedSelector = createSelector(
    (state) => state.movies.movieList
  )
  // const List = useSelector(updatedSelector);
  console.log(updatedSelector);

  return (
    <div className="Search">
      <p>Search for the Movie!</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
      </form>
    </div>
  );
};
