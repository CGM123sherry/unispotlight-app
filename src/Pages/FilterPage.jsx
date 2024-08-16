// src/pages/FilterPage.jsx
import React, { useState, useEffect } from "react";
import FilterOptions from "../Components/FilterOptions";
import UniversityList from "../Components/UniversityList";
import "./FilterPage.css";

function FilterPage() {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8000/Universities`)
      .then((response) => response.json())
      .then((data) => {
        setUniversities(data);
        setFilteredUniversities(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching universities:", error);
        setLoading(false);
      });
  }, []);

  const handleFilter = (criteria) => {
    setSelectedFilter(criteria);
    const filtered = universities.filter((university) =>
      criteria
        ? university.ownership.toLowerCase() === criteria.toLowerCase()
        : true
    );
    setFilteredUniversities(filtered);
  };

  const renderContent = () => {
    if (loading) {
      return <p className="message">Loading...</p>;
    }
    if (filteredUniversities.length === 0 && selectedFilter) {
      return (
        <p className="message">No universities match the selected filter.</p>
      );
    }
    return <UniversityList universities={filteredUniversities} />;
  };

  return (
    <div className="filter-page">
      <div className="filter-options">
        <FilterOptions onFilter={handleFilter} />
      </div>
      <div className="university-list">{renderContent()}</div>
    </div>
  );
}

export default FilterPage;
