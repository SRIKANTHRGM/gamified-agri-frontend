import React from "react";
import { Link } from "react-router-dom";

import Sugarcane1Img from "../assets/sugarcane1.png";
import Sugarcane2Img from "../assets/sugarcane2.png";
import Sugarcane3Img from "../assets/sugarcane3.png";
import Sugarcane4Img from "../assets/sugarcane4.png";

const steps = [
  {
    name: "Field Preparation",
    desc: "Deep ploughing and leveling the field for sugarcane planting.",
    image: Sugarcane1Img,
    path: "/sugarcane2",
  },
  {
    name: "Planting",
    desc: "Use healthy cane sets and proper spacing for better yield.",
    image: Sugarcane2Img,
    path: "/sugarcane3",
  },
  {
    name: "Water Management",
    desc: "Sugarcane requires frequent irrigation for steady growth.",
    image: Sugarcane3Img,
    path: "/sugarcane4",
  },
  {
    name: "Harvest",
    desc: "Harvest mature canes when they are firm and sweet.",
    image: Sugarcane4Img,
    path: "/sugarcane5",
  },
];

function Sugarcane1() {
  return (
    <div className="crop-page">
      <div className="overlay" />
      <div className="content">
        <header className="page-header">
          <h1>🍬 Sugarcane Farming Journey 🍬</h1>
          <p className="tagline">
            Learn sugarcane cultivation step by step for maximum sweetness 🌱
          </p>
        </header>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.name}>
              <img src={step.image} alt={step.name} className="step-image" />
              <div className="step-info">
                <h3>{step.name}</h3>
                <p>{step.desc}</p>
              </div>
              <Link to={step.path} className="step-btn">Start Step</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sugarcane1;
