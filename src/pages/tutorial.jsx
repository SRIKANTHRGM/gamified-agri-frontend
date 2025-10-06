import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgImg from "../assets/farm-bg3.jpg"; // Background
// Example crop images: paddy1.png, paddy2.png,..., wheat1.png,...

const crops = [
  {
    name: "Paddy",
    steps: [
      { img: "/assets/paddy1.png", desc: "Step 1: Prepare the paddy field" },
      { img: "/assets/paddy2.png", desc: "Step 2: Sow the seeds" },
      { img: "/assets/paddy3.png", desc: "Step 3: Water the field" },
      { img: "/assets/paddy4.png", desc: "Step 4: Fertilize the crop" },
      { img: "/assets/paddy5.png", desc: "Step 5: Harvest the paddy" },
    ],
  },
  {
    name: "Wheat",
    steps: [
      { img: "/assets/wheat1.png", desc: "Step 1: Plow the land" },
      { img: "/assets/wheat2.png", desc: "Step 2: Sow wheat seeds" },
      { img: "/assets/wheat3.png", desc: "Step 3: Irrigation" },
      { img: "/assets/wheat4.png", desc: "Step 4: Weed control" },
      { img: "/assets/wheat5.png", desc: "Step 5: Harvest wheat" },
    ],
  },
  {
    name: "Corn",
    steps: [
      { img: "/assets/corn1.png", desc: "Step 1: Prepare the soil" },
      { img: "/assets/corn2.png", desc: "Step 2: Plant corn seeds" },
      { img: "/assets/corn3.png", desc: "Step 3: Water regularly" },
      { img: "/assets/corn4.png", desc: "Step 4: Fertilize for growth" },
      { img: "/assets/corn5.png", desc: "Step 5: Harvest corn" },
    ],
  },
  {
    name: "Sugarcane",
    steps: [
      { img: "/assets/sugarcane1.png", desc: "Step 1: Prepare the soil" },
      { img: "/assets/sugarcane2.png", desc: "Step 2: Plant the setts" },
      { img: "/assets/sugarcane3.png", desc: "Step 3: Irrigation" },
      { img: "/assets/sugarcane4.png", desc: "Step 4: Fertilizer application" },
      { img: "/assets/sugarcane5.png", desc: "Step 5: Harvest sugarcane" },
    ],
  },
  {
    name: "Vegetables",
    steps: [
      { img: "/assets/veggies1.png", desc: "Step 1: Prepare the garden" },
      { img: "/assets/veggies2.png", desc: "Step 2: Sow seeds or seedlings" },
      { img: "/assets/veggies3.png", desc: "Step 3: Water daily" },
      { img: "/assets/veggies4.png", desc: "Step 4: Apply organic fertilizer" },
      { img: "/assets/veggies5.png", desc: "Step 5: Harvest fresh vegetables" },
    ],
  },
];

const Tutorial = () => {
  const [selectedCrop, setSelectedCrop] = useState(null);

  return (
    <div
      className="min-h-screen bg-cover bg-center p-10"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1 className="text-4xl text-white font-extrabold mb-6 text-center drop-shadow-xl">
        🌾 Farmer Tutorials
      </h1>

      {!selectedCrop ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {crops.map((crop, idx) => (
            <motion.div
              key={idx}
              className="bg-white/80 rounded-2xl p-6 text-center shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={crop.steps[0].img}
                alt={crop.name}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-green-700">{crop.name}</h2>
              <button
                className="mt-4 bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700"
                onClick={() => setSelectedCrop(crop)}
              >
                View Steps
              </button>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-white/90 p-6 rounded-3xl shadow-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">
            {selectedCrop.name} Tutorial
          </h2>
          {selectedCrop.steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex items-center mb-6 bg-green-50 p-4 rounded-xl shadow-md"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.2 }}
            >
              <img src={step.img} alt={`Step ${idx + 1}`} className="w-24 h-24 mr-4" />
              <p className="text-gray-700 font-semibold">{step.desc}</p>
            </motion.div>
          ))}
          <div className="text-center mt-6">
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
              onClick={() => setSelectedCrop(null)}
            >
              Back to Crops
            </button>
            <Link
              to="/farmgame"
              className="ml-4 bg-yellow-500 text-white px-6 py-3 rounded-xl hover:bg-yellow-600"
            >
              Start Game
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
