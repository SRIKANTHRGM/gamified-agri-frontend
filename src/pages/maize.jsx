import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Step1 from "../assets/maize1.png";
import Step2 from "../assets/maize2.png";
import Step3 from "../assets/maize3.png";
import Step4 from "../assets/maize4.png";
import Step5 from "../assets/maize5.png";

import FlowerGif from "../assets/flower.gif";

function MaizeGame() {
  const navigate = useNavigate();
  const [points, setPoints] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const steps = [
    { name: "Prepare Soil", image: Step1, points: 10 },
    { name: "Sow Seeds", image: Step2, points: 10 },
    { name: "Irrigation", image: Step3, points: 10 },
    { name: "Fertilize & Protect", image: Step4, points: 10 },
    { name: "Harvest", image: Step5, points: 10 },
  ];

  const handleCompleteStep = (stepName, stepPoints) => {
    if (!completedSteps.includes(stepName)) {
      setCompletedSteps([...completedSteps, stepName]);
      setPoints(points + stepPoints);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8fff6", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ textAlign: "center", margin: "40px 0 20px" }}>
        <h1 style={{ fontWeight: 700, fontSize: "2.4rem", color: "#2c7a2c" }}>
          🌽 Maize Farming Adventure
        </h1>
        <p style={{ background: "#fff", display: "inline-block", padding: "10px 25px", borderRadius: "16px", boxShadow: "0 2px 12px #b5c9a666", fontSize: "1.1rem", fontWeight: 500, color: "#236c1d", margin: "20px 0" }}>
          Complete each step and grow your maize farm! 🌱
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", width: "85%", maxWidth: 1100, margin: "0 auto 40px" }}>
        {steps.map((step) => (
          <div key={step.name} style={{ background: "#f7faf6dd", borderRadius: "16px", boxShadow: "0 6px 22px #8883", display: "flex", flexDirection: "column", alignItems: "center", border: "1.5px solid #e0ede0", padding: 12 }}>
            <img src={step.image} alt={step.name} style={{ width: "100%", height: 130, objectFit: "cover", borderRadius: 10, marginBottom: 12 }} />
            <h3 style={{ fontWeight: 600, textAlign: "center", color: "#29a729" }}>{step.name}</h3>
            <button onClick={() => handleCompleteStep(step.name, step.points)} style={{ marginTop: 10, background: completedSteps.includes(step.name) ? "#98e453" : "linear-gradient(90deg,#38cf2f 30%,#98e453 110%)", color: "#fff", border: "none", padding: "8px 15px", borderRadius: 8, fontWeight: 600, cursor: "pointer" }}>
              {completedSteps.includes(step.name) ? "Completed" : "Complete Step"}
            </button>
          </div>
        ))}
      </div>

      <div style={{ background: "#fff", width: "85%", maxWidth: 1100, margin: "0 auto 40px", borderRadius: "16px", boxShadow: "0 6px 22px #8883", padding: "25px", textAlign: "center" }}>
        <h2 style={{ color: "#2e8b57" }}>🌸 Flower Progress</h2>
        <p>You have {points} points</p>
        <img src={FlowerGif} alt="Flower Growth" style={{ width: 140, marginTop: 12 }} />
      </div>

      <div style={{ background: "#fff", width: "85%", maxWidth: 1100, margin: "0 auto 40px", borderRadius: "16px", boxShadow: "0 6px 22px #8883", padding: "25px" }}>
        <h2 style={{ color: "#2e8b57" }}>🏆 Leaderboard</h2>
        <ul style={{ marginTop: 10, lineHeight: "1.8" }}>
          <li>👩‍🌾 Anitha – 120 pts</li>
          <li>👨‍🌾 Ravi – 100 pts</li>
          <li>👩‍🌾 Sita – 90 pts</li>
          <li>👨‍🌾 You – {points} pts</li>
        </ul>
      </div>

      <div style={{ textAlign: "center", margin: "40px 0" }}>
        <button onClick={() => navigate("/rewards")} style={{ background: "linear-gradient(90deg,#ffb347,#ffcc33)", border: "none", color: "#285718", fontWeight: 700, fontSize: "1.1rem", padding: "12px 30px", borderRadius: "16px", boxShadow: "0 2px 10px #ffd70055", cursor: "pointer" }}>
          🎁 View Rewards
        </button>
      </div>
    </div>
  );
}

export default MaizeGame;
