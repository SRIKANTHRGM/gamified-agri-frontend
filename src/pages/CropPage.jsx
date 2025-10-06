import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Paddy1 from "../assets/paddy1.png";
import Paddy2 from "../assets/paddy2.png";
import Paddy3 from "../assets/paddy3.png";
import Paddy4 from "../assets/paddy4.png";
import Paddy5 from "../assets/paddy5.png";

import Wheat1 from "../assets/wheat1.png";
import Wheat2 from "../assets/wheat2.png";
import Wheat3 from "../assets/wheat3.png";
import Wheat4 from "../assets/wheat4.png";
import Wheat5 from "../assets/wheat5.png";

// Add other crops similarly

const cropSteps = {
  paddy: [Paddy1, Paddy2, Paddy3, Paddy4, Paddy5],
  wheat: [Wheat1, Wheat2, Wheat3, Wheat4, Wheat5],
  // sugarcane, tomato, maize...
};

function CropPage() {
  const { cropName } = useParams();
  const navigate = useNavigate();
  const steps = cropSteps[cropName];

  if (!steps) return <p>Crop not found</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{cropName.charAt(0).toUpperCase() + cropName.slice(1)} Farming Steps</h1>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
        {steps.map((img, idx) => (
          <div key={idx} style={{ textAlign: "center" }}>
            <img src={img} alt={`Step ${idx + 1}`} style={{ width: 180, height: 120, objectFit: "cover" }} />
            <p>Step {idx + 1}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/farmgame")}
        style={{ marginTop: 20, padding: "10px 20px", cursor: "pointer" }}
      >
        Back to FarmGame
      </button>
    </div>
  );
}

export default CropPage;
