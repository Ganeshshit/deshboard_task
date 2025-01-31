import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
const Layout = ({ children, darkMode, toggleDarkMode, }) => {
    return (React.createElement("div", { className: darkMode
            ? "bg-gray-800 text-white min-h-screen"
            : "bg-white text-gray-800 min-h-screen" },
        React.createElement("div", { className: "flex" },
            React.createElement(Sidebar, { darkMode: darkMode }),
            React.createElement("div", { className: "flex-1 flex flex-col min-h-screen" },
                React.createElement(Navbar, { darkMode: darkMode, toggleDarkMode: toggleDarkMode }),
                React.createElement("div", { className: "flex-grow flex items-center justify-center p-6" }, children)))));
};
export default Layout;
