import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About.jsx";

import "./assets/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:number" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={"ERROR 404: PAGE NOT FOUND"} />
        </Routes>
      </div>
    </Router>
  </StrictMode>
);
