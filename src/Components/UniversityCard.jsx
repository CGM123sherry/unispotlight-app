import React, { useEffect, useState } from "react";
import "./UniversityCard.css";

function UniversityCard({ university, onSelectUniversity }) {
  return (
    <div
      onClick={() => onSelectUniversity(university)}
      style={{ cursor: "pointer", marginBottom: "10px" }}
    >
      <h3>{university.name}</h3>
      <p>{university.course}</p>
    </div>
  );
}

export default UniversityCard;
