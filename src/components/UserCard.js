import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Reviews from './Reviews';



function UserCard({user}) {

    const [showUserReviews, setShowUserReviews] = useState(false)

    // const [first_name, last_name, location, movies, reviews, username] = user

    function handleUserReviews() {
        setShowUserReviews(!showUserReviews)
    }

    // const reviews = user.reviews
    // const movies = user.movies

    
    // const joined = movies.reduce((map, movie) => map.set(movie.id, movie.title), new Map)

    // const result = reviews.map(review => (Object.assign({
    //     from: joined.get(review.movie),
    //     to: joined.get(review.targetId)
    // }, review)))
    
    console.log(user)


  return (
    <Grid item xs={2.75} sx={{ m: 2.5}}>
        {!showUserReviews ? (
            <Card >
                <Box 
                    display={"flex"}
                    style={{backgroundColor: "#D8C3A5"}}
                >
                    <CardContent style={{backgroundColor: "#D8C3A5"}}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        User:
                        </Typography>
                        <Typography variant="h5" component="div">
                        
                        </Typography>
                        <Typography sx={{ mb: 1.5, fontSize: 24 }}>
                        {user.username}
                        </Typography>
                        <Typography variant="body2">
                            {`${user.first_name} ${user.last_name}`}
                        </Typography>
                        <Typography variant="body2">
                            From: {user.location}
                        </Typography>
                    </CardContent>
                </Box>
                <CardActions
                    style={{backgroundColor: "#D8C3A5"}}
                >
                <Button 
                        size="small"
                        onClick={handleUserReviews}
                        sx={{ m: "auto"}}
                    >
                        Show Reviews
                    </Button>
                </CardActions>
            </Card>
        ) : (
            <Card>
                <Box 
                        display={"flex"}
                        alignSelf="center"
                        justifyContent={"center"}
                        style={{backgroundColor: "#D8C3A5"}}
                >
                    <CardContent style={{backgroundColor: "#D8C3A5"}}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        User
                        </Typography>
                        <Typography variant="h5" component="div">
                        
                        </Typography>
                        <Typography sx={{ mb: 1.5, fontSize: 24 }}>
                        {user.username}
                        </Typography>
                        <Typography variant="body2">
                            {`${user.first_name} ${user.last_name}`}
                        </Typography>
                        <Typography variant="body2">
                            From: {user.location}
                        </Typography>
                        {/* <Typography variant="h5" component="div">
                            {user.reviews.comment}
                        </Typography>
                        <Box display={"flex"}>
                            <Rating 
                                value={user.reviews.rating}
                                readOnly
                                max={10}
                            />
                        </Box> */}
                        {user.reviews.map(review => {
                            return (
                                <Reviews sx={{ m: 2 }} 
                            review={review}
                        />
                            )
                        })}
                    </CardContent>
                </Box>
                <CardActions style={{backgroundColor: "#D8C3A5"}}>
                    <Button 
                        size="small"
                        onClick={handleUserReviews}
                        sx={{ m: "auto"}}
                    >
                        Hide Reviews
                    </Button>
                </CardActions>
            </Card>
        )}
    </Grid>
  )
}

export default UserCard