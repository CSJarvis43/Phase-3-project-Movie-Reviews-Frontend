import React, { useState } from "react";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({handleSearchChange, searchState}) {

  function handleChange (e) {
    handleSearchChange(e)
  }
 
  return (
    <FormControl variant="standard" sx={{ mx: "auto" }}>
      <InputLabel htmlFor="input-with-icon-adornment">
        Search for a Movie
      </InputLabel>
      <Input
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        id="search"
        value={searchState}
        onChange={handleChange}
      />
      
    </FormControl>
  );
}

export default SearchBar;

