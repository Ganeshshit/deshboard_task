import { useState } from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  // const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}
    >
      <Router>
        <div className="flex">
          <Sidebar darkMode={darkMode} />
          <div className="flex-1">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <div className="p-6">
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
