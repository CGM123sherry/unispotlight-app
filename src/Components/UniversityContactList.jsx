import React from "react";
import UniversityContactCard from "../Components/UniversityContactCard";

function UniversityContactList({ universities = [] }) {
  return (
    <div className="contact-list">
      {universities.map((university, index) => (
        <UniversityContactCard key={index} university={university} />
      ))}
    </div>
  );
}

export default UniversityContactList;
