import React from "react";
import { Search } from "../SearchBar/Search";
import { useSelector } from "react-redux";

const Home = () => {
  const ListOfMovies = useSelector(
    (state) => state?.rootReducers?.movies?.movieList?.Search
  );

  return (
    <>
      <Search />
      {ListOfMovies &&
        ListOfMovies.map((list) => {
          return <div key={list.year}>{list.Title}</div>;
        })}
    </>
  );
};

export default Home;
