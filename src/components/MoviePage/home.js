import React from "react";
import { Search } from "../SearchBar/Search";
import { useSelector } from "react-redux";

const Home = () => {

    // const {movieList} = useSelector((state) => (state.movies));
    // console.log(movieList);

    return(
        <>
        <Search/>
        {/* <div>{res.map(movie=> {
            <div>movie.Year</div>
        })}</div> */}
        </>
    )
}

export default Home;