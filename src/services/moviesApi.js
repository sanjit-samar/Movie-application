import axios from "axios";
import {MOVIE_API_KEY} from "../../.env";

const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${MOVIE_API_KEY}`;

 const moviesApi = () => {
    return axios.get({
        method: 'get',
        url: url,
        
    })
}

export default moviesApi;