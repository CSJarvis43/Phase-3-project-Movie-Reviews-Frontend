import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'



function Users() {

    const [userState, setUserState] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/users")
        .then(res => res.json())
        .then(setUserState)
    }, [])

    console.log(userState)

    const userCards = userState.map(user => {
        return (
            <UserCard 
                key={user.id}
                user={user}
            />
        )
    })



  return (
    <Grid container spacing={3}>
        {userCards}
    </Grid>
  )
}

export default Users