import React from "react";
import { Link } from "react-router-dom";

import Wheat1Img from "../assets/wheat1.png";
import Wheat2Img from "../assets/wheat2.png";
import Wheat3Img from "../assets/wheat3.png";
import Wheat4Img from "../assets/wheat4.png";

const steps = [
  {
    name: "Soil Preparation",
    desc: "Prepare the field with ploughing and add organic matter.",
    image: Wheat1Img,
    path: "/wheat2",
  },
  {
    name: "Sowing",
    desc: "Use quality seeds and proper spacing for better yield.",
    image: Wheat2Img,
    path: "/wheat3",
  },
  {
    name: "Irrigation",
    desc: "Provide timely irrigation, especially at critical growth stages.",
    image: Wheat3Img,
    path: "/wheat4",
  },
  {
    name: "Harvest",
    desc: "Harvest when grains turn golden and hard for best results.",
    image: Wheat4Img,
    path: "/wheat5",
  },
];

function Wheat1() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "url('../assets/background.png') center/cover no-repeat",
        position: "relative",
        fontFamily: "'Segoe UI', sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          background: "linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.95))",
          minHeight: "100vh",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", margin: "50px 0 18px 0" }}>
          <h1 style={{ fontWeight: 700, fontSize: "2.3rem", color: "#2f7a2f" }}>
            🌾 Wheat Farming Journey 🌾
          </h1>
          <div
            style={{
              background: "#fff",
              display: "inline-block",
              padding: "12px 28px",
              borderRadius: "18px",
              boxShadow: "0 2px 12px #b5c9a6aa",
              fontSize: "1.13rem",
              fontWeight: 500,
              color: "#236c1d",
              margin: "28px 0",
            }}
          >
            Learn how to cultivate wheat step by step, from soil preparation to harvest 🌱
          </div>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "28px",
            width: "85%",
            maxWidth: 1100,
            margin: "0 auto",
            marginBottom: 40,
          }}
        >
          {steps.map((step) => (
            <div
              key={step.name}
              style={{
                background: "#f7faf6dd",
                borderRadius: "16px",
                boxShadow: "0 6px 22px #8883",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1.5px solid #e0ede0",
              }}
            >
              <img
                src={step.image}
                alt={step.name}
                style={{ width: "100%", height: 150, objectFit: "cover" }}
              />
              <div style={{ padding: "22px 16px 15px", flex: 1 }}>
                <h3 style={{ fontWeight: 600, fontSize: "1.1rem", color: "#29a729", textAlign: "center" }}>
                  {step.name}
                </h3>
                <p style={{ color: "#474947", fontSize: "0.97rem", minHeight: 60, textAlign: "center" }}>
                  {step.desc}
                </p>
              </div>
              <Link
                to={step.path}
                style={{
                  display: "block",
                  width: "88%",
                  padding: "10px",
                  marginBottom: "18px",
                  background: "linear-gradient(90deg,#38cf2f 30%,#98e453 110%)",
                  borderRadius: "9px",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1.08rem",
                  textAlign: "center",
                  textDecoration: "none",
                  boxShadow: "0 2px 8px #7ccd5590",
                }}
              >
                Start Step
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wheat1;
