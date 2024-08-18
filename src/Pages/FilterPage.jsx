// src/pages/FilterPage.jsx
import React, { useState, useEffect } from "react";
import FilterOptions from "../Components/FilterOptions";
import UniversityList from "../Components/UniversityList";
import "./FilterPage.css";

function FilterPage() {
  const [universities, setUniversities] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [newCourse, setNewCourse] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/Universities")
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

  useEffect(() => {
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = universities.filter((university) =>
        university.name.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredUniversities(filtered);
    } else {
      setFilteredUniversities(universities);
    }
  }, [searchQuery, universities]);

  const handleUniversitySelect = (university) => {
    setSelectedUniversity(university);
  };

  const handleCourseChange = (e) => {
    setNewCourse(e.target.value);
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    if (selectedUniversity && newCourse) {
      const updatedUniversities = universities.map((uni) =>
        uni.id === selectedUniversity.id
          ? { ...uni, courses: [...uni.courses, newCourse] }
          : uni
      );
      setUniversities(updatedUniversities);
      setFilteredUniversities(updatedUniversities);
      setSelectedUniversity((prev) => ({
        ...prev,
        courses: [...prev.courses, newCourse],
      }));
      setNewCourse("");
    }
  };

  const renderContent = () => {
    if (loading) {
      return <p className="message">Loading...</p>;
    }
    if (!selectedUniversity) {
      return (
        <p className="message">
          Any new course discoveries? Feel free to add them!.
          <br />
          Click on the target university on the left.
        </p>
      );
    }
    return (
      <FilterOptions university={selectedUniversity} onCourseClick={() => {}} />
    );
  };

  return (
    <div className="filter-page">
      <div className="content-container">
        <div className="left-sidebar">
          <h2 className="heading">
            Please select a university to see and a course.
          </h2>
          <input
            type="text"
            className="search-bar"
            placeholder="Search universities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <UniversityList
            universities={filteredUniversities}
            onUniversitySelect={handleUniversitySelect}
            selectedUniversity={selectedUniversity}
          />
        </div>
        <div className="right-content">
          {selectedUniversity && (
            <form className="add-course-form" onSubmit={handleAddCourse}>
              <input
                type="text"
                value={newCourse}
                onChange={handleCourseChange}
                placeholder="Add new course"
              />
              <button type="submit">Add Course</button>
            </form>
          )}
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default FilterPage;
