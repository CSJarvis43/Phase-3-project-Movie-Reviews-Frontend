import * as React from "react";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card"
import { CardMedia } from "@mui/material";
import ReactReadMoreReadLess from "react-read-more-read-less";
import CardHeader from "@mui/material/CardHeader";
import { FlipToBack, FlipToFront } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

function MoviesCard({movie}) {
  const [value, setValue] = React.useState(0);
  const [showBack, setShowBack] = React.useState(false)

  function handleFlip() {
    setShowBack(!showBack);
  }



  return (
    <Grid item xs={4}>
      <CardHeader
        action={
          <IconButton aria-label="flip card" onClick={handleFlip}>
            {!showBack ? <FlipToBack /> : <FlipToFront />}
          </IconButton>
        }
        />
      <Card className="MoviesCard" elevation={20}>
        {!showBack ? (
          <CardMedia 
            component="img"
            image={movie.img_url}
            height="900"
          /> 
        ) : (
          <Typography>
            YOOO ITS ME THE BACK OF THE CARD
          </Typography>
        )}
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
          <ReactReadMoreReadLess
              charLimit={75}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readMoreClassName="read-more-less--more"
              readLessClassName="read-more-less--less"
          >
            {movie.description}
          </ReactReadMoreReadLess>
        </Box>{" "}
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
      </Card>
    </Grid>
  );
}

export default MoviesCard;
