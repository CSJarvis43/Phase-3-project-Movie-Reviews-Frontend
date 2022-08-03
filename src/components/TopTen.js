import React, { useEffect, useState } from 'react'
import MoviesCardContainer from './MoviesContainer'


function TopTen({handleAddFavorite}) {
const [topMovies, setTopMovies] = useState([])


useEffect(() => {
    fetch(`http://localhost:9292/movies/top`)
    .then(res => res.json())
    .then(setTopMovies)
},[])





  return (
    <MoviesCardContainer
        handleAddFavorite={handleAddFavorite}
        movies={topMovies}
    >

    </MoviesCardContainer>
  )
}

export default TopTen