import React, { useState, useEffect } from "react";
import UniversityContactList from "../Components/UniversityContactList";
import "./ContactPage.css";

function ContactPage() {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/Universities")
      .then((response) => response.json())
      .then((data) => setUniversities(data))
      .catch((error) => console.error("Error fetching universities:", error));
  }, []);

  return (
    <div>
      <h1>Contact Information</h1>
      <UniversityContactList universities={universities} />
    </div>
  );
}

export default ContactPage;
