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
  const [favorites, setFavorites] = useState([])
  const [operand, setOperand] = useState(null)

/* ----------------------------- Grabbing initial data from back end ----------------------------- */
  useEffect(() => {
    fetch('http://localhost:9292/reviews')
    .then((response) => response.json())
    .then((data) => setMovies(data))
  }, [operand])
  // console.log(operand)
/* ----------------------------- Setting favorites page ----------------------------- */
  // useEffect(() => {
  //   fetch('http://localhost:9292/favorites')
  //   .then(res => res.json())
  //   .then((data) => setFavorites(data))
  // }, [])
  
  function handleAddFavorite(newItem) {
    setFavorites([...favorites, newItem]);
  }
  /* ----------------------------- Working SearchBar ----------------------------- */

  function handleSearchChange(e) {
    e.preventDefault()
    setSearchState(e.target.value)
  }


  // console.log(movies)

  // useEffect(() => {
  //   fetch('http://localhost:9292/reviews')
  //   .then(res => res.json())
  //   .then(setRevByMovie)
  // },[])

  const displayedMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(searchState.toLowerCase());
  });

  /* ----------------------------- Return App.js ----------------------------- */


  return (
    <Router>
      <Navbar 
        searchState={searchState}
        handleSearchChange={handleSearchChange} 
      />

      <Routes>
        <Route 
          path="/"
          element={
            <Container maxWidth={"false"}>
              <MoviesCardContainer 
                className='MoviesContainer'
                movies={displayedMovies}
                handleAddFavorite={handleAddFavorite}
                setOperand={setOperand}
              />

            </Container>
          }
        />

        <Route 
          path="/top-ten"
          element={
            <Container maxWidth={"false"}>
              <TopTen 
                handleAddFavorite={handleAddFavorite}
                setOperand={setOperand}
              />
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