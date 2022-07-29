import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function MoviesCard() {
  const [value, setValue] = React.useState(0);

  return (
    <Grid item xs={4}>
      <Paper className="MoviesCard">
        <img className="recipe-image" />
        <Box paddingX={1}>
          <Typography variant="h4" component="h2">
            Movie Title
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            Image URL
          </Box>
          <Typography variant="subtitle1">Description</Typography>
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
