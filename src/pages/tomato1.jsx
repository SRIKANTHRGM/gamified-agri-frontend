import React from "react";
import { Link } from "react-router-dom";

import Tomato1Img from "../assets/tomato1.png";
import Tomato2Img from "../assets/tomato2.png";
import Tomato3Img from "../assets/tomato3.png";
import Tomato4Img from "../assets/tomato4.png";

const steps = [
  {
    name: "Nursery Preparation",
    desc: "Prepare healthy seedlings in nursery trays or beds.",
    image: Tomato1Img,
    path: "/tomato2",
  },
  {
    name: "Transplanting",
    desc: "Shift seedlings to the main field with proper spacing.",
    image: Tomato2Img,
    path: "/tomato3",
  },
  {
    name: "Care & Irrigation",
    desc: "Provide regular water and support plants with stakes.",
    image: Tomato3Img,
    path: "/tomato4",
  },
  {
    name: "Harvest",
    desc: "Harvest when tomatoes turn red and firm for market.",
    image: Tomato4Img,
    path: "/tomato5",
  },
];

function Tomato1() {
  return (
    <div className="crop-page">
      <div className="overlay" />
      <div className="content">
        <header className="page-header">
          <h1>🍅 Tomato Farming Journey 🍅</h1>
          <p className="tagline">
            Learn tomato cultivation step by step, from nursery to harvest 🌱
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

export default Tomato1;
