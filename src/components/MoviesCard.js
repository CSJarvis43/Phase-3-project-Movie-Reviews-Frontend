import * as React from "react";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Favorite from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card"
import { Button, CardMedia, Container } from "@mui/material";
import ReactReadMoreReadLess from "react-read-more-read-less";
import CardHeader from "@mui/material/CardHeader";
import { FlipToBack, FlipToFront } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Reviews from "./Reviews";
import CardActions from "@mui/material/CardActions";
import ReviewForm from "./ReviewForm";


function MoviesCard({ movie, handleAddFavorite, setOperand }) {
  // const [value, setValue] = React.useState(0);
  const [showBack, setShowBack] = React.useState(false)
  const [value, setValue] = React.useState(0);
  const [fav, setFav] = React.useState(false);

  function handleFlip() {
    setShowBack(!showBack);
  }


  // const newUsers = movie.users.map(user => {
  //   const container = {}

  //   container[user.id] = user
  //   return container
  // })

  // console.log(movie.users)


  // const newReviews = movie.reviews.filter(review => review.user_id === movie.users.user.i)
// console.log(movie)
  const average = movie.reviews.reduce((total, next) => total + next.rating, 0) / movie.reviews.length







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
    reviews
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
        reviews
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
        // .then((data) => handleAddFavorite(data));

        
      // fetch("http://localhost:9292/favorites", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      //   body: JSON.stringify(movie.reviews[0]),
      // })
      //   .then((res) => res.json())
      //   // .then((data) => handleAddFavorite(data));
      
        
    }
  }
    
  

  return (
    <Grid item xs={4}>
      <CardHeader
        action={
          <IconButton aria-label="flip card" onClick={handleFlip}>
            {!showBack ? <FlipToBack /> : <FlipToFront />}
          </IconButton>
        }
        style={{backgroundColor: "#EAE7DC"}}
        title={"Click to See Reviews"}
        />
      <Card className="MoviesCard" elevation={20} style={{backgroundColor: "#D8C3A5"}}>
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
                  setOperand={setOperand}
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
          <Typography>
            {movie.description}
          </Typography>

        </Box>{" "}
        <Box paddingX={1} display="flex">
          {/* <Typography component="legend">Rating</Typography> */}
          <Rating
            name="simple-controlled"
            value={average}
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
            sx={{ mx: "auto" }}
            max={10}
            readOnly
            precision={0.25}
          />
         <center>
          {!fav && (
            <IconButton
              onClick={handleFav}
              aria-label="delete"
              color="primary"
              className="likeButton"
              sx={{ mx: "auto" }}
            >Favorite:
              <FavoriteBorderIcon>:</FavoriteBorderIcon>
            </IconButton>
          )}
          {fav && (
            <IconButton
              onClick={handleFav}
              aria-label="delete"
              color="primary"
              className="likeButton"
              sx={{ mx: "auto" }}
            >Favorited!
              <Favorite></Favorite>
            </IconButton>
          )}
          </center>
        </Box>
        <ReviewForm movie={movie} setOperand={setOperand}/>
      </Card>
    </Grid>
  );
}


export default MoviesCard