import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Favorite from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

function MoviesCard({ movie, handleAddFavorite }) {
  const [value, setValue] = React.useState(0);
  const [fav, setFav] = React.useState(false);

  /* ----------------------------- Post for favorites to backend  ----------------------------- */
  const {
    id,
    title,
    description,
    img_url,
    director,
    box_office_earnings,
    production_company,
    release_year,
    runtime,
  } = movie;

  function handleFav() {
    setFav(!fav);
    if (fav == false) {
      const movie = {
        id,
        title,
        description,
        img_url,
        director,
        box_office_earnings,
        production_company,
        release_year,
        runtime,
      };
      console.log(movie)
      fetch("http://localhost:9292/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(movie),
      })
        .then((res) => res.json())
        .then((newItem) => handleAddFavorite(newItem));
    } else {
      //Or delete from /favorites (or do nothing)
    }
  }
    
  

  return (
    <Grid item xs={4}>
      <Paper className="MoviesCard" elevation={20}>
        <img className="movie-image" alt={movie.title} src={movie.img_url} />
        <Box paddingX={1}>
          <Typography variant="h4" component="h2">
            {movie.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          ></Box>
          <Typography variant="subtitle1">{movie.description}</Typography>
        </Box>{" "}
        :
        <Box paddingX={1}>
          <Typography component="legend">Ratings</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            max={10}
          />
          {!fav && (
            <IconButton
              onClick={handleFav}
              aria-label="delete"
              color="primary"
              className="likeButton"
            >
              <FavoriteBorderIcon></FavoriteBorderIcon>
            </IconButton>
          )}
          {fav && (
            <IconButton
              onClick={handleFav}
              aria-label="delete"
              color="primary"
              className="likeButton"
            >
              <Favorite></Favorite>
            </IconButton>
          )}
        </Box>
      </Paper>
    </Grid>
  );
}

export default MoviesCard;
