import axios from "axios";


const MOVIE_API_KEY = '8ec4439';

const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${MOVIE_API_KEY}`;

export const moviesApi = async (movieName) => axios.get(`${url}&s=${movieName}`);

// export const moviesApi = (movieName) => {
//     return axios.get(`${url}&s=${movieName}`)
//         .then(data => data)
// };