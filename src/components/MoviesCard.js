import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function MoviesCard({movie}) {
  const [value, setValue] = React.useState(0);


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
          >
          </Box>
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
        </Box>
      </Paper>
    </Grid>
  );
}

export default MoviesCard;
