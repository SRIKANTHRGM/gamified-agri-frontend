import React from "react";
import { Link } from "react-router-dom";

import PaddyImg from "../assets/paddy.png";
import WheatImg from "../assets/wheat.png";
import SugarcaneImg from "../assets/sugarcane.png";
import TomatoImg from "../assets/tomato.png";
import MaizeImg from "../assets/maize.png";

const crops = [
  {
    name: "Paddy",
    desc: "Learn rice cultivation from seed to harvest. Master water management and traditional farming techniques.",
    image: PaddyImg,
    path: "/paddy1",
  },
  {
    name: "Wheat",
    desc: "Discover wheat farming secrets. Learn about soil preparation, sowing, and harvesting golden grains.",
    image: WheatImg,
    path: "/wheat1",
  },
  {
    name: "Sugarcane",
    desc: "Explore sugarcane plantation methods. Understand irrigation, pest control, and sugar production.",
    image: SugarcaneImg,
    path: "/sugarcane1",
  },
  {
    name: "Tomato",
    desc: "Master tomato cultivation techniques. Learn greenhouse farming, pruning, and disease management.",
    image: TomatoImg,
    path: "/tomato1",
  },
  {
    name: "Maize",
    desc: "Learn corn farming, hybrid varieties, fertilizers, and harvesting methods.",
    image: MaizeImg,
    path: "/maize1",
  },
];

function Home() {
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
              fontSize: "2.5rem",
              color: "#398824",
              margin: 0,
            }}
          >
            <span role="img" aria-label="leaf">
              🌿
            </span>{" "}
            Welcome to AgriLearn{" "}
            <span role="img" aria-label="wheat">
              🌾
            </span>
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
            Select your crop, follow real farming steps, and grow your farm while earning rewards{" "}
            <span role="img" aria-label="seedling">
              🌱
            </span>
          </div>
        </div>

        {/* Crop Cards Grid */}
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
          {crops.map((crop) => (
            <div
              key={crop.name}
              style={{
                background: "#f7faf6dd",
                borderRadius: "16px",
                boxShadow: "0 6px 22px #8883",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "box-shadow 0.2s",
                border: "1.5px solid #e0ede0",
              }}
            >
              <img
                src={crop.image}
                alt={crop.name}
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
                  {crop.name}
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
                  {crop.desc}
                </p>
              </div>
              <Link
                to={crop.path} // 👈 now points to cropname1
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
                  transition: "background 0.15s",
                }}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Start Journey Button */}
        <div style={{ textAlign: "center", margin: "22px 0 32px" }}>
          <Link
            to="/login"
            style={{
              background: "linear-gradient(90deg,#ffb347,#ffcc33 80%)",
              display: "inline-block",
              padding: "13px 35px",
              borderRadius: "18px",
              color: "#285718",
              fontWeight: 700,
              fontSize: "1.14rem",
              boxShadow: "0 2px 10px #ffd70033",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Start Your Farming Journey
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
