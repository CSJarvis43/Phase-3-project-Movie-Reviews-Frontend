import React from "react";
import MoviesCard from "./MoviesCard";
import Grid from "@mui/material/Grid";

function MoviesCardContainer({movies, handleAddFavorite, setOperand}) {

  console.log(movies)

  const renderMovies = movies.map((movie) => {
    return (
      <MoviesCard
        key={movie.id}
        title={movie.title}
        movie={movie}
        handleAddFavorite={handleAddFavorite}
        setOperand={setOperand}
      />
    );
  });

  // const renderReviews = reviews.map(review => {
  //   return (
  //     <MoviesCard 
  //       key={review.id}
  //       comment={review.comment}
  //       movieId={review.movie_id}
  //       rating={review.rating}
  //     />

  //   )
  // })

  return (
    <div className="movies-container">
      <Grid container spacing={6}>
        {renderMovies}
        {/* {renderReviews} */}
      </Grid>
    </div>
  );
}

export default MoviesCardContainer;
