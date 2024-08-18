import React, { useState, useEffect } from "react";
import UniversityContactList from "../Components/UniversityContactList";
// import Map from "../Components/Map";
import "./ContactPage.css";

const ContactPage = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/Universities") // Adjust to your API endpoint
      .then((response) => response.json())
      .then((data) => setUniversities(data))
      .catch((error) => console.error("Error fetching universities:", error));
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1>University Locations</h1>
        <p>Find below the contact details of our partner universities.</p>
      </div>
      <UniversityContactList universities={universities} />
    </div>
  );
};

export default ContactPage;
