import React, { useEffect, useState } from 'react'
import MoviesCardContainer from './MoviesContainer'


function TopTen({handleAddFavorite, setOperand}) {
const [topMovies, setTopMovies] = useState([])
const [topOperand, setTopOperand] = useState(null)


useEffect(() => {
    fetch(`http://localhost:9292/movies/top`)
    .then(res => res.json())
    .then(setTopMovies)
},[topOperand])





  return (
    <MoviesCardContainer
        handleAddFavorite={handleAddFavorite}
        movies={topMovies}
        setOperand={setTopOperand}
    >

    </MoviesCardContainer>
  )
}

export default TopTen