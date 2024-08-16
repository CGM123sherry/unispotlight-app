import React, { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import UniversityList from "../Components/UniversityList";
import UniversityDetails from "../Components/UniversityDetails";
import "./HomePage.css";
import "../Components/UniversityList";

function HomePage() {
  const [universities, setUniversities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/Universities`)
      .then((response) => response.json())
      .then((data) => setUniversities(data))
      .catch((error) => console.error("Error fetching universities:", error));
  }, []);

  const filteredUniversities = universities.filter((university) =>
    university.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUniversitySelect = (university) => {
    setSelectedUniversity(university);
  };

  return (
    <div className="home-container">
      <div className="sidebar">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <UniversityList
          universities={filteredUniversities}
          onSelectUniversity={handleUniversitySelect}
        />
      </div>
      <div className="details">
        {selectedUniversity ? (
          <UniversityDetails university={selectedUniversity} />
        ) : (
          <p>Select a university to see details</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
