import React from "react";
import { Bell, User, Sun, MoonStar } from "lucide-react";
const Navbar = ({ darkMode, toggleDarkMode }) => {
    return (React.createElement("div", { className: `pl-8 fixed top-0 left-0 w-full p-4 shadow-lg ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"} z-10` },
        React.createElement("div", { className: "flex justify-between items-center" },
            React.createElement("div", { className: "text-xl font-bold" }, "Dashboard"),
            React.createElement("div", { className: "flex items-center space-x-6" },
                React.createElement("div", { className: "relative" },
                    React.createElement(Bell, { className: "w-6 h-6 cursor-pointer" }),
                    React.createElement("span", { className: "absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center" }, "3")),
                React.createElement("button", { onClick: toggleDarkMode, className: `p-2 w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? "bg-white text-gray-800" : "bg-gray-800 text-white"} transition-colors` }, darkMode ? (React.createElement(Sun, { className: "w-6 h-6" })) : (React.createElement(MoonStar, { className: "w-6 h-6" }))),
                React.createElement("div", { className: "flex items-center space-x-2 cursor-pointer" },
                    React.createElement(User, { className: "w-6 h-6" }))))));
};
export default Navbar;
