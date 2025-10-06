import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgImg from "../assets/farm-bg6.jpg"; // Background
import trophyImg from "../assets/trophy.png"; // Trophy icon

// Example leaderboard data
const leaderboard = [
  { name: "Farmer A", points: 120 },
  { name: "Farmer B", points: 110 },
  { name: "Farmer C", points: 100 },
  { name: "Farmer D", points: 90 },
  { name: "Farmer E", points: 80 },
];

const Leaderboard = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-10"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1 className="text-4xl text-white font-extrabold mb-8 text-center drop-shadow-xl">
        🏆 Leaderboard
      </h1>

      <div className="max-w-3xl mx-auto">
        {leaderboard.map((farmer, idx) => (
          <motion.div
            key={idx}
            className={`flex items-center justify-between bg-white/90 p-6 rounded-3xl mb-4 shadow-lg`}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className="flex items-center">
              <img
                src={trophyImg}
                alt="Trophy"
                className="w-12 h-12 mr-4 animate-bounce"
              />
              <p className="text-xl font-bold text-green-700">{farmer.name}</p>
            </div>
            <p className="text-lg font-semibold text-gray-700">{farmer.points} pts</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/tutorial"
          className="bg-yellow-500 text-white px-6 py-3 rounded-xl hover:bg-yellow-600"
        >
          Back to Tutorials
        </Link>
      </div>
    </div>
  );
};

export default Leaderboard;
