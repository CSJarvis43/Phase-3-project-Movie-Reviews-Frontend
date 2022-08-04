import React, {useEffect, useState} from 'react'

import MoviesCardContainer from './MoviesContainer'

function Favorites({ handleAddFavorite }) {
  const [favMovies, setfavMovies] = useState([])

useEffect(() => {
  fetch('http://localhost:9292/favorites')
  .then((response) => response.json())
  .then((data) => setfavMovies(data))
}, [])
console.log(favMovies)

  return (
    <MoviesCardContainer 
    movies={favMovies}
    handleAddFavorite={handleAddFavorite}
   />
  )
}

export default Favorites;

