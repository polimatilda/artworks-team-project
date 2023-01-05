import React from "react";
import './SearchBar.css'

function SearchBar({ setFilterImg }) {

  return (
    <div className="search-bar">
      <form>
        <label>what are you looking for?</label>
        <div>
          <input type="text" name="filter" id="filter" onChange={(event) => setFilterImg(event.target.value)} />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
