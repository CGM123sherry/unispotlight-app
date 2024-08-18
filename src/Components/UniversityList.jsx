import React from "react";
import UniversityCard from "./UniversityCard";
import "./UniversityList.css";

function UniversityList({
  universities,
  onUniversitySelect,
  selectedUniversity,
}) {
  return (
    <ul className="university-list">
      {universities.map((university) => (
        <li
          key={university.id}
          className={university.id === selectedUniversity?.id ? "selected" : ""}
        >
          <UniversityCard
            university={university}
            onSelectUniversity={onUniversitySelect}
          />
        </li>
      ))}
    </ul>
  );
}

export default UniversityList;
