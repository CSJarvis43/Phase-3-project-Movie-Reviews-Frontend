import React, {useState} from 'react'
import { CardActions, Container, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

function ReviewForm() {

    const [showForm, setShowForm] = useState(false)
    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')

    function handleShowForm() {
        setShowForm(!showForm)
    }

    function handleSubmit(e) {
        console.log(e.target)
    }

    function handleRating(e) {
        setRating(e.target.value)
    }

    function handleComment(e) {
        setComment(e.target.value)
    }
    
    console.log(comment)

  return (
    <CardActions>
        {!showForm? (
        <Button 
            variant="contained"
            sx={{ mx: "auto" }}
            onClick={handleShowForm}
        >
            Leave A Review
        </Button>
        ) :
        <Container >
            <Box display={"flex"}>
                {/* <TextField 
                    label="Rating" 
                    size="small" 
                    sx={{ mx: "auto", my: "auto" }} 
                    value={rating}
                    onChange={handleRating}
                /> */}
                <FormControl sx={{ m: "auto", minWidth: 120 }}>
                    <InputLabel>Rating</InputLabel>
                    <Select
                        value={rating}
                        label="Rating"
                        onChange={handleRating}
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
                    sx={{ mx: "auto", my: "auto", minWidth: 300}} 
                    value={comment}
                    onChange={handleComment}
                />
                <Button 
                    variant="contained"
                    sx={{ mx: "auto", my: "auto", minHeight: 60, minWidth: 120 }}
                    onClick={handleSubmit}
                    type="submit"
                >
                Submit
                </Button>
            </Box>
            <Box display={"flex"}>
                <Button 
                    variant="contained"
                    sx={{ mx: "auto", my: 2, minHeight: 60, minWidth: 120 }}
                    onClick={handleShowForm}
                >
                Abandon Review
                </Button>
            </Box>
        </Container>}
    </CardActions>
  )
}

export default ReviewForm