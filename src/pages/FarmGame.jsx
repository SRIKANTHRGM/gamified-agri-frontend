import React from "react";
import { useNavigate } from "react-router-dom";

// Images
import PaddyImg from "../assets/paddy.png";
import WheatImg from "../assets/wheat.png";
import SugarcaneImg from "../assets/sugarcane.png";
import TomatoImg from "../assets/tomato.png";
import MaizeImg from "../assets/maize.png";

function FarmGame() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "#f8fff6", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ textAlign: "center", margin: "40px 0 20px" }}>
        <h1 style={{ fontWeight: 700, fontSize: "2.4rem", color: "#2c7a2c" }}>
          🌱 Farm Adventure Game 🌾
        </h1>
        <p style={{
          background: "#fff",
          display: "inline-block",
          padding: "10px 25px",
          borderRadius: "16px",
          boxShadow: "0 2px 12px #b5c9a666",
          fontSize: "1.1rem",
          fontWeight: 500,
          color: "#236c1d",
          margin: "20px 0",
        }}>
          Select your crop to start your farming journey!
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "28px",
        width: "85%",
        maxWidth: 1100,
        margin: "0 auto 40px",
      }}>
        {/* Paddy */}
        <div style={cardStyle}>
          <img src={PaddyImg} alt="Paddy" style={imgStyle} />
          <h3 style={titleStyle}>Paddy</h3>
          <p style={descStyle}>Learn rice cultivation from seed to harvest.</p>
          <button style={btnStyle} onClick={() => navigate("/paddy")}>Select Paddy</button>
        </div>

        {/* Wheat */}
        <div style={cardStyle}>
          <img src={WheatImg} alt="Wheat" style={imgStyle} />
          <h3 style={titleStyle}>Wheat</h3>
          <p style={descStyle}>Discover wheat farming secrets.</p>
          <button style={btnStyle} onClick={() => navigate("/wheat")}>Select Wheat</button>
        </div>

        {/* Sugarcane */}
        <div style={cardStyle}>
          <img src={SugarcaneImg} alt="Sugarcane" style={imgStyle} />
          <h3 style={titleStyle}>Sugarcane</h3>
          <p style={descStyle}>Explore sugarcane plantation methods.</p>
          <button style={btnStyle} onClick={() => navigate("/sugarcane")}>Select Sugarcane</button>
        </div>

        {/* Tomato */}
        <div style={cardStyle}>
          <img src={TomatoImg} alt="Tomato" style={imgStyle} />
          <h3 style={titleStyle}>Tomato</h3>
          <p style={descStyle}>Master tomato cultivation techniques.</p>
          <button style={btnStyle} onClick={() => navigate("/tomato")}>Select Tomato</button>
        </div>

        {/* Maize */}
        <div style={cardStyle}>
          <img src={MaizeImg} alt="Maize" style={imgStyle} />
          <h3 style={titleStyle}>Maize</h3>
          <p style={descStyle}>Learn corn farming, hybrid varieties, fertilizers.</p>
          <button style={btnStyle} onClick={() => navigate("/maize")}>Select Maize</button>
        </div>
      </div>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button style={rewardBtnStyle} onClick={() => navigate("/rewards")}>
          Go to Rewards
        </button>
      </div>
    </div>
  );
}

// Common styles
const cardStyle = {
  background: "#f7faf6dd",
  borderRadius: "16px",
  boxShadow: "0 6px 22px #8883",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1.5px solid #e0ede0",
  paddingBottom: "15px",
};

const imgStyle = { width: "100%", height: 150, objectFit: "cover" };
const titleStyle = { fontWeight: 600, fontSize: "1.1rem", color: "#29a729", margin: "10px 0 5px" };
const descStyle = { color: "#474947", fontSize: "0.95rem", textAlign: "center", margin: "0 10px 10px" };
const btnStyle = {
  width: "88%",
  padding: "10px",
  background: "linear-gradient(90deg,#38cf2f 30%,#98e453 110%)",
  border: "none",
  color: "#fff",
  borderRadius: "9px",
  fontWeight: 600,
  cursor: "pointer",
};
const rewardBtnStyle = {
  padding: "12px 30px",
  background: "linear-gradient(90deg,#ffb347,#ffcc33 80%)",
  border: "none",
  color: "#285718",
  fontWeight: 700,
  borderRadius: "18px",
  fontSize: "1.1rem",
  cursor: "pointer",
};

export default FarmGame;
