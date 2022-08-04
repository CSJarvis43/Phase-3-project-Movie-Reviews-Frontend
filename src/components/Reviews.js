import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'

function Reviews({review, setOperand}) {

    const [showEdit, setShowEdit] = useState(false)
    const [editRating, setEditRating] = useState('')
    const [editComment, setEditComment] = useState('')

    const editObj = {
        rating: editRating,
        comment: editComment,
        movie_id: review.movie_id
    }

    function handleShowEdit() {
        setShowEdit(!showEdit)
    }

    function handleDelete(review) {
        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(r => r.json())
        .then(review => setOperand(review))
    }


    function handleEditRating(e) {
        setEditRating(e.target.value)
    }

    function handleEditComment(e) {
        setEditComment(e.target.value)
    }

    function handleEdit(review) {
        console.log(editObj)
        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(editObj)
        })
        .then(r => r.json())
        .then(setOperand(review))
        // console.log(review.id)
    }
  

  return (
    <Card sx={{ minWidth: 300, m: 1 }} style={{backgroundColor: "#8E8D8A"}}>
      <CardContent>
        <Typography variant="h5" component="div">
        {review.comment}
        </Typography>
        <Box display={"flex"}>
            <Rating 
                value={review.rating}
                readOnly
                max={10}
            />
            <Button 
            variant="contained"
            sx={{ mx: "auto" }}
            onClick={handleShowEdit}
            size="small"
        >
            Edit Review
        </Button>
        <Button 
            variant="contained"
            sx={{ mx: "auto" }}
            onClick={() => handleDelete(review)}
            size="small"
        >
            Delete Review
        </Button>
        </Box>
        {!showEdit ? (
            <Box>
            </Box>
        ) : (
            <Box display={"flex"} sx={{ my: 2 }}>
                {/* <TextField 
                    label="Rating" 
                    size="small" 
                    sx={{ mx: "auto", my: "auto" }} 
                    value={rating}
                    onChange={handleRating}
                /> */}
                <FormControl sx={{ m: "auto", minWidth: 100 }}>
                    <InputLabel>Rating</InputLabel>
                    <Select
                        value={editRating}
                        label="Rating"
                        onChange={handleEditRating}
                        size="small"
                    >
                        <MenuItem value={1}>1 ⭐</MenuItem>
                        <MenuItem value={2}>2 ⭐</MenuItem>
                        <MenuItem value={3}>3 ⭐</MenuItem>
                        <MenuItem value={4}>4 ⭐</MenuItem>
                        <MenuItem value={5}>5 ⭐</MenuItem>
                        <MenuItem value={6}>6 ⭐</MenuItem>
                        <MenuItem value={7}>7 ⭐</MenuItem>
                        <MenuItem value={8}>8 ⭐</MenuItem>
                        <MenuItem value={9}>9 ⭐</MenuItem>
                        <MenuItem value={10}>10 ⭐</MenuItem>
                    </Select>
                </FormControl>
                <TextField 
                    label="Comment" 
                    sx={{ mx: "auto", my: "auto"}} 
                    value={editComment}
                    onChange={handleEditComment}
                    size="small"
                />
                <Button 
                    variant="contained"
                    sx={{ mx: "auto", my: "auto"}}
                    onClick={() => handleEdit(review)}
                    type="submit"
                    size="small"
                >
                Submit
                </Button>
            </Box>
        )}
      </CardContent>
    </Card>
    
  )
}

export default Reviews