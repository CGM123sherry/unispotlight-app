// src/components/FilterOptions.jsx
import React from "react";

function FilterOptions({ university, onCourseClick }) {
  const courses = Array.from(new Set(university?.courses || [])).sort();

  return (
    <div className="filter-options">
      <h4>Courses for {university?.name}</h4>
      <ul>
        {courses.map((course) => (
          <li key={course} onClick={() => onCourseClick(course)}>
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterOptions;
