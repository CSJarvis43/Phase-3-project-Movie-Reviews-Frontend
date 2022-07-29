import React from 'react'
import { Input } from 'semantic-ui-react'

function Navbar() {
  return (
    <div className="NavBar">
      <center>Welcome Page</center>
        Home Page - Search Bar - Favorites Page
        <Input className='SearchBar'
        placeholder='Search Movies' />
    </div>
  )
}

export default Navbar