import React from "react";

function Search({search, setSearch}) {
  function handleChange(event) {
    setSearch(event.target.value);
  }
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
