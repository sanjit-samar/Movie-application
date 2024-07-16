import axios from "axios";
// import {MOVIE_API_KEY} from "../../.env";

const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.MOVIE_API_KEY}`;

export const moviesApi = (movieName) => axios.get(`${url}&s=${movieName}`);