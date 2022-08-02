import React from "react";
import MoviesCard from "./MoviesCard";
import Grid from "@mui/material/Grid";

function MoviesCardContainer({movies, handleAddFavorite}) {

  const renderMovies = movies.map((movie) => {
    return (
      <MoviesCard
        key={movie.id}
        title={movie.title}
        movie={movie}
        handleAddFavorite={handleAddFavorite}
      />
    );
  });

  return (
    <div className="movies-container">
      <center>RENDER MOVIES</center>
      <Grid container spacing={6}>
        {renderMovies}
      </Grid>
    </div>
  );
}

export default MoviesCardContainer;
