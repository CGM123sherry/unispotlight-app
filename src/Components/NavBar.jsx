import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f8f9fa" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>
        Home
      </Link>
      <Link to="/filter" style={{ marginRight: "1rem" }}>
        Courses
      </Link>

      <Link to="/contact" style={{ marginRight: "1rem" }}>
        Contact
      </Link>
    </nav>
  );
}

export default NavBar;
