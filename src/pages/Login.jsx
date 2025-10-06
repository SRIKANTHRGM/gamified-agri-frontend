// src/pages/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import farmImage from "../assets/ba.png"; // ✅ Local background image

function LoginPage() {
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
          background: `url(${farmImage}) center center/cover no-repeat`, // ✅ Local image used here
        }}
      ></div>

      {/* Right - Login Form */}
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
              style={{
                fontSize: 32,
                color: "#28ac3c",
              }}
              role="img"
              aria-label="leaf"
            >
              🌿
            </span>
          </div>

          {/* Title and Subtitle */}
          <h2 style={{ color: "#28ac3c", margin: "0 0 2px" }}>AgriLearn</h2>
          <div
            style={{
              fontSize: "1rem",
              color: "#37b256",
              marginBottom: 18,
            }}
          >
            Welcome back to your agricultural learning platform
          </div>

          {/* Login Form Card */}
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
              Sign in to your account
            </div>
            <div
              style={{
                fontSize: "0.97rem",
                color: "#73796d",
                marginBottom: 16,
              }}
            >
              Enter your credentials to access your learning resources
            </div>

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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#f5fbf4",
                border: "1.5px solid #e4eee4",
                borderRadius: 7,
                marginBottom: 15,
              }}
            >
              <span
                style={{
                  color: "#7dcf98",
                  marginLeft: 12,
                  marginRight: 8,
                  fontSize: 18,
                }}
                role="img"
                aria-label="mail"
              >
                ✉
              </span>
              <input
                type="email"
                id="email"
                placeholder="farmer@example.com"
                style={{
                  border: "none",
                  background: "transparent",
                  flex: 1,
                  fontSize: 15.5,
                  padding: "8px 0",
                  outline: "none",
                }}
              />
            </div>

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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#f5fbf4",
                border: "1.5px solid #e4eee4",
                borderRadius: 7,
                marginBottom: 7,
              }}
            >
              <span
                style={{
                  color: "#7dcf98",
                  marginLeft: 12,
                  marginRight: 8,
                  fontSize: 19,
                }}
                role="img"
                aria-label="lock"
              >
                🔒
              </span>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                style={{
                  border: "none",
                  background: "transparent",
                  flex: 1,
                  fontSize: 15.5,
                  padding: "8px 0",
                  outline: "none",
                }}
              />
            </div>

            <div
              style={{
                textAlign: "right",
                marginBottom: 17,
              }}
            >
              <a
                href="#"
                style={{
                  color: "#25a942",
                  fontWeight: 500,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                Forgot your password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              onClick={() => navigate("/farmgame")} // ✅ Navigate to farmgame
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
              Sign In
            </button>

            {/* Register Button */}
            <button
              onClick={() => navigate("/register")}
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
              Create Account
            </button>
          </div>

          <div
            style={{
              color: "#899189",
              fontSize: 14,
              marginTop: 8,
            }}
          >
            Don’t have an account? Register now
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
