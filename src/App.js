import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Library from "./components/Library";
import List from "./components/List";
import Creation from "./components/Creation";
import Help from "./components/Help";
import ColorPalette from "./components/ColorPalette";
import "./styles/globals.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/library" element={<Library />} />
      <Route path="/list" element={<List />} />
      <Route path="/creation" element={<Creation />} />
      <Route path="/help" element={<Help />} />
      <Route path="/colors" element={<ColorPalette />} />
    </Routes>
  );
}

export default App;
