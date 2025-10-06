import React from "react";
import { Link } from "react-router-dom";

import Paddy1Img from "../assets/paddy1.png";
import Paddy2Img from "../assets/paddy2.png";
import Paddy3Img from "../assets/paddy3.png";
import Paddy4Img from "../assets/paddy4.png";

const steps = [
  {
    name: "Soil Preparation",
    desc: "Plough and level the field, add manure or compost to improve fertility.",
    image: Paddy1Img,
    path: "/paddy2",
  },
  {
    name: "Sowing",
    desc: "Select healthy seeds and transplant them carefully into the prepared field.",
    image: Paddy2Img,
    path: "/paddy3",
  },
  {
    name: "Irrigation",
    desc: "Maintain proper water levels and manage weeds for healthy crop growth.",
    image: Paddy3Img,
    path: "/paddy4",
  },
  {
    name: "Harvest",
    desc: "Drain the field, cut mature crops, and thresh to collect grains.",
    image: Paddy4Img,
    path: "/paddy5",
  },
];

function Paddy1() {
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
          <h1
            style={{
              fontWeight: 700,
              fontSize: "2.3rem",
              color: "#2f7a2f",
              margin: 0,
            }}
          >
            🌱 Paddy Farming Journey 🌾
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
            Follow each step carefully and learn how rice is cultivated from seed to harvest 🌱
          </div>
        </div>

        {/* Steps Grid */}
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
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div style={{ padding: "22px 16px 15px", flex: 1 }}>
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    color: "#29a729",
                    margin: "0 0 8px 0",
                    textAlign: "center",
                  }}
                >
                  {step.name}
                </h3>
                <p
                  style={{
                    color: "#474947",
                    fontSize: "0.97rem",
                    minHeight: 60,
                    margin: 0,
                    textAlign: "center",
                  }}
                >
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
                  cursor: "pointer",
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

export default Paddy1;
