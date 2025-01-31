import React from "react";
import { Link } from "react-router-dom";
import { FaEthereum, FaKey, FaHome, FaShoppingBag, FaCalendarAlt, FaCog, FaPowerOff, } from "react-icons/fa";
const Sidebar = ({ darkMode }) => {
    return (React.createElement("div", { className: `fixed top-0 left-0 w-[100px] h-full ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"} shadow-lg` },
        React.createElement("div", { className: "flex flex-col p-4 space-y-4 mt-20 justify-center items-center" },
            React.createElement(Link, { to: "/", className: "text-xl flex items-center space-x-2" },
                React.createElement(FaEthereum, null)),
            React.createElement(Link, { to: "/key", className: "text-xl flex items-center space-x-2" },
                React.createElement(FaKey, null)),
            React.createElement(Link, { to: "/home", className: "text-xl flex items-center space-x-2" },
                React.createElement(FaHome, null)),
            React.createElement(Link, { to: "/bag", className: "text-xl flex items-center space-x-2" },
                React.createElement(FaShoppingBag, null)),
            React.createElement(Link, { to: "/calendar", className: "text-xl flex items-center space-x-2" },
                React.createElement(FaCalendarAlt, null)),
            React.createElement(Link, { to: "/settings", className: "text-xl flex items-center space-x-2" },
                React.createElement(FaCog, null))),
        React.createElement("div", { className: "absolute bottom-4 left-0 w-full p-4 flex justify-center" },
            React.createElement(Link, { to: "/logout", className: "text-xl flex items-center space-x-2 text-red-500" },
                React.createElement(FaPowerOff, null)))));
};
export default Sidebar;
