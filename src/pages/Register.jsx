// src/pages/Register.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import farmImage from "../assets/bac.png"; // ✅ Local background

function RegisterPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Arial, sans-serif",
      }}
    >
      {/* Left - Photo */}
      <div
        style={{
          flex: 1,
          background: `url(${farmImage}) center center/cover no-repeat`,
        }}
      ></div>

      {/* Right - Register Form */}
      <div
        style={{
          flex: 1,
          background: "#f6fcf6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: 350, margin: "0 auto", textAlign: "center" }}>
          {/* Logo/icon */}
          <div
            style={{
              margin: "0 auto 16px",
              width: 54,
              height: 54,
              background: "#e8fbe5",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{ fontSize: 32, color: "#28ac3c" }}
              role="img"
              aria-label="leaf"
            >
              🌿
            </span>
          </div>

          {/* Title */}
          <h2 style={{ color: "#28ac3c", margin: "0 0 2px" }}>AgriLearn</h2>
          <div
            style={{
              fontSize: "1rem",
              color: "#37b256",
              marginBottom: 18,
            }}
          >
            Create your account and start your journey 🌱
          </div>

          {/* Register Form Card */}
          <div
            style={{
              background: "#fff",
              borderRadius: 15,
              boxShadow: "0 3px 18px #b5cca244",
              padding: 28,
              textAlign: "left",
              margin: "0 0 18px",
            }}
          >
            <div style={{ fontWeight: 600, color: "#28783a", marginBottom: 8 }}>
              Register a new account
            </div>

            {/* Name */}
            <label
              htmlFor="name"
              style={{
                fontWeight: 500,
                color: "#228a26",
                fontSize: 14,
                marginBottom: 3,
                display: "block",
              }}
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              style={{
                width: "100%",
                border: "1.5px solid #e4eee4",
                borderRadius: 7,
                padding: "8px 10px",
                marginBottom: 12,
                fontSize: 15.5,
              }}
            />

            {/* Email */}
            <label
              htmlFor="email"
              style={{
                fontWeight: 500,
                color: "#228a26",
                fontSize: 14,
                marginBottom: 3,
                display: "block",
              }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="farmer@example.com"
              style={{
                width: "100%",
                border: "1.5px solid #e4eee4",
                borderRadius: 7,
                padding: "8px 10px",
                marginBottom: 12,
                fontSize: 15.5,
              }}
            />

            {/* Password */}
            <label
              htmlFor="password"
              style={{
                fontWeight: 500,
                color: "#228a26",
                fontSize: 14,
                marginBottom: 3,
                display: "block",
              }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter a password"
              style={{
                width: "100%",
                border: "1.5px solid #e4eee4",
                borderRadius: 7,
                padding: "8px 10px",
                marginBottom: 15,
                fontSize: 15.5,
              }}
            />

            {/* Register Button */}
            <button
              style={{
                width: "100%",
                background: "linear-gradient(90deg, #32c43c 60%, #47d97a 100%)",
                border: "none",
                color: "#fff",
                fontWeight: 600,
                fontSize: 17,
                padding: "11px 0",
                borderRadius: 8,
                boxShadow: "0 2px 11px #13bb3050",
                cursor: "pointer",
                marginBottom: 10,
              }}
            >
              Register
            </button>

            {/* Back to Login Button */}
            <button
              onClick={() => navigate("/login")}
              style={{
                width: "100%",
                background: "linear-gradient(90deg, #ffb347, #ffcc33 80%)",
                border: "none",
                color: "#285718",
                fontWeight: 600,
                fontSize: 16,
                padding: "10px 0",
                borderRadius: 8,
                boxShadow: "0 2px 10px #ffd70050",
                cursor: "pointer",
              }}
            >
              Back to Login
            </button>
          </div>

          <div
            style={{
              color: "#899189",
              fontSize: 14,
              marginTop: 8,
            }}
          >
            Already have an account? Sign in instead
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
