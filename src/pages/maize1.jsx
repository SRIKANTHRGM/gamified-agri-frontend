import React from "react";
import { Link } from "react-router-dom";

import Maize1Img from "../assets/maize1.png";
import Maize2Img from "../assets/maize2.png";
import Maize3Img from "../assets/maize3.png";
import Maize4Img from "../assets/maize4.png";

const steps = [
  {
    name: "Soil Preparation",
    desc: "Prepare fertile soil with organic manure for maize cultivation.",
    image: Maize1Img,
    path: "/maize2",
  },
  {
    name: "Seed Sowing",
    desc: "Plant maize seeds with correct spacing for healthy growth.",
    image: Maize2Img,
    path: "/maize3",
  },
  {
    name: "Fertilization & Watering",
    desc: "Apply fertilizers and irrigate during growth stages.",
    image: Maize3Img,
    path: "/maize4",
  },
  {
    name: "Harvest",
    desc: "Harvest when cobs are mature and kernels are firm.",
    image: Maize4Img,
    path: "/maize5",
  },
];

function Maize1() {
  return (
    <div className="crop-page">
      <div className="overlay" />
      <div className="content">
        <header className="page-header">
          <h1>🌽 Maize Farming Journey 🌽</h1>
          <p className="tagline">
            Learn maize cultivation step by step, from soil prep to harvest 🌱
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

export default Maize1;
