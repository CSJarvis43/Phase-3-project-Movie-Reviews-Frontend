import React, { useState } from "react";

function SearchBar({handleSearchChange, searchState}) {

  function handleChange (e) {
    handleSearchChange(e)
  }
 
  return (
    <div className="searchbar">
      <label htmlFor="search"></label>
      <input
        type="text"
        id="search"
        placeholder="Search movies..."
        value={searchState}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;

