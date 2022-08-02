import { Typography, Card, CardContent, Rating } from '@mui/material'
import React from 'react'

function Reviews(review) {
  

  return (
    <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <Typography variant="h5" component="div">
        {review.review.comment}
        </Typography>
        <Rating 
            value={review.review.rating}
            readOnly
            max={10}
        />
      </CardContent>
    </Card>
    
  )
}

export default Reviews