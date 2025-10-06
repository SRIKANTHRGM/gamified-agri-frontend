import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const quizQuestions = [
  {
    question: "Which crop is known as the 'King of Cereals'?",
    options: ["Maize", "Wheat", "Paddy", "Sugarcane"],
    answer: "Wheat",
  },
  {
    question: "What is the main requirement for paddy cultivation?",
    options: ["Dry climate", "Water-logged soil", "High temperature", "None"],
    answer: "Water-logged soil",
  },
  {
    question: "Which fertilizer is commonly used in tomato farming?",
    options: ["Nitrogen", "Phosphorus", "Potassium", "All of these"],
    answer: "All of these",
  },
  {
    question: "Sugarcane is primarily cultivated for?",
    options: ["Food", "Fuel", "Sugar ", "Animal feed"],
    answer: "Sugar ",
  },
  {
    question: "Which crop is harvested by the process called 'Sowing'?",
    options: ["Maize", "Wheat", "Paddy", "Tomato"],
    answer: "Maize",
  },
];

function Rewards() {
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [bonusRewards, setBonusRewards] = useState([]);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore((prev) => prev + 20);
    }
    setSelectedOption(null);

    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);

      // Calculate final score with current question included if correct
      const totalScore = score + (selectedOption === currentQuestion.answer ? 20 : 0);
      let newRewards = [];

      if (totalScore === 100) {
        newRewards.push("🌟 Quiz Master Bonus Reward!");
      } else if (totalScore >= 60) {
        newRewards.push("👍 Good Job Bonus Reward!");
      }
      setBonusRewards(newRewards);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fff6",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "40px 20px",
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 50 }}>
        <h1 style={{ color: "#2c7a2c", fontWeight: 700, fontSize: "3rem" }}>
          🎉🎁 Your Farming Rewards 🎁🎉
        </h1>
      </div>

      {/* Rewards List */}
      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 6px 22px #8883",
          padding: "40px 30px",
          color: "#2c7a2c",
          fontSize: "1.1rem",
          lineHeight: "1.8",
          fontWeight: 600,
          marginBottom: 40,
        }}
      >
        <h2>Rewards Earned:</h2>
        <ul>
          <li>🌾 Paddy Expert Badge</li>
          <li>🍅 Tomato Grower Medal</li>
          <li>🌽 Maize Master Trophy</li>
          <li>🍬 Sugarcane Star Medal</li>
          <li>🌾 Wheat Champion Award</li>
          {bonusRewards.map((reward, idx) => (
            <li key={idx} style={{ color: "#007a00", fontWeight: "bold" }}>
              {reward}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: 20, fontWeight: "bold" }}>Total Points: {score}</p>
      </div>

      {/* Quiz Section */}
      {!quizCompleted ? (
        <div
          style={{
            backgroundColor: "#e6f9e6",
            borderRadius: 20,
            boxShadow: "0 6px 22px #8883",
            padding: 30,
            color: "#2c7a2c",
            maxWidth: 700,
            margin: "0 auto 40px",
            fontWeight: 600,
            fontSize: "1.1rem",
            lineHeight: "1.5",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>🌟 Quiz: Test Your Farming Knowledge! 🌟</h2>
          <p
            style={{
              fontWeight: 600,
              fontSize: "1.2rem",
              marginLeft: 0,
              marginBottom: 20,
            }}
          >
            {currentQuestionIndex + 1}. {currentQuestion.question}
          </p>
          {currentQuestion.options.map((option) => (
            <label
              key={option}
              style={{
                display: "block",
                cursor: "pointer",
                margin: "8px 0",
                fontSize: "1.05rem",
                userSelect: "none",
                color: "#2c7a2c",
              }}
            >
              <input
                type="radio"
                name="quiz"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionSelect(option)}
                style={{ marginRight: 12 }}
              />
              {option}
            </label>
          ))}
          <button
            disabled={selectedOption === null}
            onClick={handleSubmit}
            style={{
              marginTop: 30,
              padding: "12px 30px",
              maxWidth: 220,
              width: "100%",
              backgroundColor:
                selectedOption === null
                  ? "#c6e0c6"
                  : "linear-gradient(90deg, #38cf2f 30%, #98e453 110%)",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.1rem",
              borderRadius: 15,
              border: "none",
              cursor: selectedOption === null ? "not-allowed" : "pointer",
              boxShadow: "0 2px 10px #7ccd5590",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              transition: "background 0.3s",
            }}
          >
            {currentQuestionIndex === quizQuestions.length - 1 ? "Submit Quiz" : "Next Question"}
          </button>
        </div>
      ) : (
        <div
          style={{ textAlign: "center", marginTop: 40, fontWeight: "bold", color: "#1a5d1a" }}
        >
          Thank you for completing the quiz! Your points have been updated.
        </div>
      )}

      {/* Back Button */}
      <div style={{ textAlign: "center", marginTop: 60 }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "linear-gradient(90deg,#38cf2f 30%,#98e453 110%)",
            padding: "15px 45px",
            borderRadius: 24,
            border: "none",
            color: "white",
            fontWeight: 700,
            fontSize: "1.2rem",
            boxShadow: "0 2px 10px #7ccd5590",
            cursor: "pointer",
            transition: "background 0.2s ease-in-out",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#29a329")}
          onMouseOut={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(90deg,#38cf2f 30%,#98e453 110%)")
          }
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Rewards;
