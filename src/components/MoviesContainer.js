import React from "react";
import MoviesCard from "./MoviesCard";
import Grid from '@mui/material/Grid';


function MoviesCardContainer() {

return <div className="movies-container">
    <center>RENDER MOVIES</center>
    <Grid container spacing={5}>
          <MoviesCard/>
        </Grid>
    </div>;


}

export default MoviesCardContainer