import React, { useState } from "react";
import "./AddUniversityForm.css";

function AddUniversityForm({ onAddUniversity }) {
  const [name, setName] = useState("");
  const [courses, setCourses] = useState([""]);
  const [contact, setContact] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUniversity = {
      id: Date.now(),
      name,
      courses,
      contact,
      website,
    };
    onAddUniversity(newUniversity);
    setName("");
    setCourses([""]);
    setContact("");
    setWebsite("");
  };

  return (
    <div className="add-university-container">
      <h2>Add University</h2>
      <form className="add-university-form" onSubmit={handleSubmit}>
        <div>
          <label>University Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Course:</label>
          <input
            type="text"
            value={courses[0]}
            onChange={(e) => setCourses([e.target.value])}
            required
          />
        </div>
        <div>
          <label>Contact Information:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Website URL:</label>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddUniversityForm;
