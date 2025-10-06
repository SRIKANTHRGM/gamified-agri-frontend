import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgImg from "../assets/farm-bg7.jpg"; // Background
import flowerImg from "../assets/flower.png"; // Flower growth

const Profile = () => {
  // Example user data (replace with real data later)
  const [user, setUser] = useState({
    name: "Farmer John",
    email: "farmerjohn@example.com",
    points: 120,
    cropStepsCompleted: 5,
  });

  const [flowerScale, setFlowerScale] = useState(0.5);

  // Animate flower growth based on crop steps completed
  useEffect(() => {
    const scale = 0.5 + user.cropStepsCompleted * 0.1;
    setFlowerScale(scale > 1 ? 1 : scale);
  }, [user.cropStepsCompleted]);

  return (
    <div
      className="min-h-screen bg-cover bg-center p-10"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1 className="text-4xl text-white font-extrabold mb-8 text-center drop-shadow-xl">
        👩‍🌾 Profile
      </h1>

      <div className="max-w-2xl mx-auto bg-white/90 rounded-3xl p-8 shadow-lg text-center">
        <motion.div
          className="mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-green-700 mb-2">{user.name}</h2>
          <p className="text-gray-700 mb-1">Email: {user.email}</p>
          <p className="text-gray-700 font-semibold">
            Points: {user.points}
          </p>
        </motion.div>

        <motion.div
          className="mt-6"
          initial={{ scale: 0 }}
          animate={{ scale: flowerScale }}
          transition={{ duration: 1 }}
        >
          <img
            src={flowerImg}
            alt="Flower Growth"
            className="mx-auto w-32 h-32"
          />
          <p className="text-green-700 mt-2 font-semibold">
            Your crop progress 🌱
          </p>
        </motion.div>

        <div className="mt-6">
          <Link
            to="/tutorial"
            className="bg-yellow-500 text-white px-6 py-3 rounded-xl hover:bg-yellow-600"
          >
            Back to Tutorials
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
