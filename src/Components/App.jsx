import React from "react";
import AppRoutes from "../Routes";
import NavBar from "../Components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <AppRoutes />
    </Router>
  );
}

export default App;
