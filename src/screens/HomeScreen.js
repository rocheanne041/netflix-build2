import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../Requests';


function HomeScreen() {
  return (
  <div className='homeScreen'>
  <NavBar />
  <Banner />
  {/* put props to customize one component to another */}
  <Row title = 'Only on Netflix' fetchUrl={requests.fetchNetflixOriginals}
isLargeRow />
 <Row title = 'Trending' fetchUrl={requests.fetchTrending} />
 <Row title = 'Top Rated' fetchUrl={requests.fetchTopRated} />
 <Row title = 'Action and Adventure' fetchUrl={requests.fetchActionMovies} />
 <Row title = 'Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
 <Row title = 'Romantic Movies' fetchUrl={requests.fetchRomanceMovies} />
 <Row title = 'Documentaries' fetchUrl={requests.fetchDocumentaries} />


  </div>
  );
}

export default HomeScreen;
