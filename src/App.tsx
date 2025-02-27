import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/laout/Layout.js";
import HomePage from "./pages/HomePage.js";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => { 
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </>
      </Layout>
    </Router>
  );
}

export default App;
