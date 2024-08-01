import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectTab from "./components/ProjectTab";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projectTab" element={<ProjectTab />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}
export default App;
