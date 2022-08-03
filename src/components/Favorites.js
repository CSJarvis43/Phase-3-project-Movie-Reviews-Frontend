import React, {useEffect} from 'react'
import MoviesCard from "./MoviesCard"
import MoviesCardContainer from './MoviesContainer'

function Favorites({ movies, handleAddFavorite }) {


console.log(movies)

  return (
    <div><MoviesCardContainer 
    className='MoviesContainer'
    movies={movies}
    handleAddFavorite={handleAddFavorite}
   /></div>
  )
}

export default Favorites;

