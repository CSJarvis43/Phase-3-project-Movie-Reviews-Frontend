



import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/NavBar';
import MoviesCardContainer from './components/MoviesContainer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container } from '@mui/material';
import TopTen from './components/TopTen';
import Favorites from './components/Favorites';
import SearchBar from './components/SearchBar';

function App() {
  const [movies, setMovies] = useState([])
  const [searchState, setSearchState] = useState('')

  useEffect(() => {
    fetch('http://localhost:9292')
    .then((response) => response.json())
    .then((data) => setMovies(data))
  }, [])

  console.log(movies)

  function handleSearchChange(e) {
    e.preventDefault()
    setSearchState(e.target.value)
  }

  const displayedMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(searchState.toLowerCase());
  });

  return (
    <Router>
      <Navbar />
      <SearchBar
      searchState={searchState}
      handleSearchChange={handleSearchChange} />

      <Routes>
        <Route 
          path="/"
          element={
            <Container maxWidth={"false"}>
              <MoviesCardContainer 
                className='MoviesContainer'
                movies={displayedMovies}
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