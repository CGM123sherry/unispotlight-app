import React from "react";
import UniversityCard from "./UniversityCard";
import "./UniversityList.css";

function UniversityList({ universities, onSelectUniversity }) {
  return (
    <div>
      {universities.map((university) => (
        <UniversityCard
          key={university.id}
          university={university}
          onSelectUniversity={onSelectUniversity}
        />
      ))}
    </div>
  );
}

export default UniversityList;
