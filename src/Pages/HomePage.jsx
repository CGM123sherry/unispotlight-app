import React, { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import UniversityList from "../Components/UniversityList";
import UniversityDetails from "../Components/UniversityDetails";
import AddUniversityForm from "../Components/AddUniversityForm";
import "./HomePage.css";

function HomePage() {
  const [universities, setUniversities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/Universities`)
      .then((response) => response.json())
      .then((data) => {
        setUniversities(data);
        if (data.length > 0) {
          setSelectedUniversity(data[0]); // Set the first university as the default
        }
      })
      .catch((error) => console.error("Error fetching universities:", error));
  }, []);

  const filteredUniversities = universities.filter((university) =>
    university.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUniversitySelect = (university) => {
    setSelectedUniversity(university);
  };

  const handleAddUniversity = (newUniversity) => {
    setUniversities([...universities, newUniversity]);
    // Automatically scroll the sidebar to the bottom after adding a new university
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.scrollTop = sidebar.scrollHeight;
    }
  };

  return (
    <div className="home-container">
      <div className="add-university-navbar">
        <AddUniversityForm onAddUniversity={handleAddUniversity} />
      </div>
      <div className="sidebar">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <UniversityList
          universities={filteredUniversities}
          onUniversitySelect={handleUniversitySelect}
          selectedUniversity={selectedUniversity}
        />
      </div>
      <div className="details">
        {selectedUniversity ? (
          <UniversityDetails university={selectedUniversity} />
        ) : (
          <div className="empty-state">
            <img src="../images/Favread.jpg" alt="No universities available" />
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
