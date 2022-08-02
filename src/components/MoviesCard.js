import * as React from "react";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card"
import { CardMedia, Container } from "@mui/material";
import ReactReadMoreReadLess from "react-read-more-read-less";
import CardHeader from "@mui/material/CardHeader";
import { FlipToBack, FlipToFront } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Reviews from "./Reviews";

function MoviesCard({movie}) {
  // const [value, setValue] = React.useState(0);
  const [showBack, setShowBack] = React.useState(false)

  function handleFlip() {
    setShowBack(!showBack);
  }

  const newUsers = movie.users.map(user => {
    const container = {}

    container[user.id] = user
    return container
  })

  console.log(movie.users)


  // const newReviews = movie.reviews.filter(review => review.user_id === movie.users.user.i)

  const average = movie.reviews.reduce((total, next) => total + next.rating, 0) / movie.reviews.length


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
          <Container>
            {movie.reviews.map(review => {
              // console.log(review)
              return (
                <Reviews 
                  review={review}
                  key={review.id}
                />
              )
            })}
          </Container>
          // <Typography>
          //   test
          // </Typography>
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
            value={average}
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
            max={10}
            readOnly
            precision={0.1}
          />
        </Box>
      </Card>
    </Grid>
  );
}

export default MoviesCard;
