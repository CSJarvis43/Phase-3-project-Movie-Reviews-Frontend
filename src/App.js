



import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/NavBar';
import MoviesCardContainer from './components/MoviesContainer'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292')
    .then((response) => response.json())
    .then((data) => setMovies(data))
  }, [])

  console.log(movies)

  return (
    <div className="App">
      <Navbar 
        />
      <MoviesCardContainer className='MoviesContainer'
      movies={movies}/>
    </div>
  );
}

export default App;