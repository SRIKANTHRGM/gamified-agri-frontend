import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import FarmGame from "./pages/FarmGame.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import Profile from "./pages/Profile.jsx";
import Rewards from "./pages/Rewards.jsx"; 

import Paddy from "./pages/paddy.jsx";
import Wheat from "./pages/wheat.jsx";
import Sugarcane from "./pages/sugarcane.jsx";
import Tomato from "./pages/tomato.jsx";
import Maize from "./pages/maize.jsx";


import Paddy1 from "./pages/paddy1.jsx";
import Wheat1 from "./pages/wheat1.jsx";
import Sugarcane1 from "./pages/sugarcane1.jsx";
import Tomato1 from "./pages/tomato1.jsx";
import Maize1 from "./pages/maize1.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/farmgame" element={<FarmGame />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/profile" element={<Profile />} />

      {/* Rewards Page Route */}
      <Route path="/rewards" element={<Rewards />} />

      {/* Old Crop Pages (FarmGame) */}
      <Route path="/paddy" element={<Paddy />} />
      <Route path="/wheat" element={<Wheat />} />
      <Route path="/sugarcane" element={<Sugarcane />} />
      <Route path="/tomato" element={<Tomato />} />
      <Route path="/maize" element={<Maize />} />

      {/* New Crop Pages (Home) */}
      <Route path="/paddy1" element={<Paddy1 />} />
      <Route path="/wheat1" element={<Wheat1 />} />
      <Route path="/sugarcane1" element={<Sugarcane1 />} />
      <Route path="/tomato1" element={<Tomato1 />} />
      <Route path="/maize1" element={<Maize1 />} />

      {/* Fallback to Home */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
