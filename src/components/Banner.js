import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Banner.css';
import axios from '../axios';
import requests from '../Requests';

function Banner() {

  const [movie, setMovie] = useState([]);

  //fetch movie information
  useEffect(() => {
    //responsible for fetching movie to the banner
    async function fetchData() {
      //local axios file
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  //if description has more characters
  function truncate(string, n) {
    // cut string after reaches character count then add ... otherwise greater than 50, simply return the string
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}>

      <div className="banner_contents">
        <div className="banner_title">{movie?.title || movie?.name || movie?.original_name}</div>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
