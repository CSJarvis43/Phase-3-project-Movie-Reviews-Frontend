



import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/NavBar';
import MoviesCardContainer from './components/MoviesContainer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container } from '@mui/material';
import TopTen from './components/TopTen';
import Favorites from './components/Favorites';

function App() {
  const [movies, setMovies] = useState([])
  // const [revByMovie, setRevByMovie] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/reviews')
    .then((response) => response.json())
    .then((data) => setMovies(data))
  }, [])

  // console.log(movies)

  // useEffect(() => {
  //   fetch('http://localhost:9292/reviews')
  //   .then(res => res.json())
  //   .then(setRevByMovie)
  // },[])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/"
          element={
            <Container maxWidth={"false"}>
              <MoviesCardContainer 
                className='MoviesContainer'
                movies={movies}
                // reviews={revByMovie}
              />
            </Container>
          }
        />

        <Route 
          path="/top-ten"
          element={
            <Container maxWidth={"false"}>
              <TopTen />
            </Container>
          }
        />
        <Route 
          path="/favorites"
          element={
            <Container maxWidth={"false"}>
              <Favorites />
            </Container>
          }
        />
      </Routes>
    </Router>

  );
}

export default App;