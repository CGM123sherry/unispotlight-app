import React from "react";

function UniversityContactCard({ university }) {
  return (
    <div className="contact-card">
      <h2>{university.name}</h2>
      <p>
        <strong>Email:</strong> {university.contact.email}
      </p>
      <p>
        <strong>Phone:</strong> {university.contact.phone}
      </p>
      <p>
        <strong>Address:</strong> {university.contact.address}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a
          href={university.web_pages[0]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {university.web_pages[0]}
        </a>
      </p>
    </div>
  );
}

export default UniversityContactCard;
