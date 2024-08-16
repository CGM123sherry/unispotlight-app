// src/components/FilterOptions.jsx
import React, { useState } from "react";

function FilterOptions({ onFilter }) {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <select
        value={filter}
        onChange={handleFilterChange}
        style={{ padding: "0.5rem", width: "100%" }}
      >
        <option value="">All</option>
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
    </div>
  );
}

export default FilterOptions;
