import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";

import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <div>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  </StrictMode>
);
