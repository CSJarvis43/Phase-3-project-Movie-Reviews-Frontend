



import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import MoviesCardContainer from './components/MoviesContainer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container } from '@mui/material';
import TopTen from './components/TopTen';
import Favorites from './components/Favorites';

function App() {


  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/"
          element={
            <Container maxWidth={"false"}>
              <MoviesCardContainer />
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
