import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Register from "./pages/Register";
import Timeline from "./pages/Timeline";
import Chatlist from "./pages/Chatlist";

const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/chatlist" element={<Chatlist />} />
      </Routes>
  );
};

export default App;
