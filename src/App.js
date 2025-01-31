import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/laout/Layout.js";
import HomePage from "./pages/HomePage.js";
function App() {
    const [darkMode, setDarkMode] = useState(true);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (React.createElement(Router, null,
        React.createElement(Layout, { darkMode: darkMode, toggleDarkMode: toggleDarkMode },
            React.createElement(React.Fragment, null,
                React.createElement(Routes, null,
                    React.createElement(Route, { path: "/", element: React.createElement(HomePage, null) }))))));
}
export default App;
