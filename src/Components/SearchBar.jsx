import React from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search for a university"
      />
    </div>
  );
}

export default SearchBar;
