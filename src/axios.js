//A library making requests, use axios because we have to make a request from tmdb server
import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3" 
})


export default instance; 
