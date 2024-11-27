import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Portfolio = () => {
  const { number } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!number || isNaN(number) || number < 1 || number > 6) {
      navigate("/");
    }
  }, [number, navigate]);

  useEffect(() => {
    document.title = `CIS1102N | Portfolio #${number}`;
  }, []);

  return (
    <div>
      <h1>Portfolio #{number}</h1>
    </div>
  );
};

export default Portfolio;
