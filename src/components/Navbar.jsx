import React from "react";
import { Bell, User, Sun, MoonStar } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <div
      className={`pl-8 fixed top-0 left-0 w-full p-4 shadow-lg ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } z-10`}
    >
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Dashboard</div>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <Bell className="w-6 h-6 cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`p-2 w-12 h-12 rounded-full flex items-center justify-center ${
              darkMode ? "bg-white text-gray-800" : "bg-gray-800 text-white"
            } transition-colors`}
          >
            {darkMode ? (
              <Sun className="w-6 h-6" />
            ) : (
              <MoonStar className="w-6 h-6" />
            )}
          </button>
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="https://via.placeholder.com/32"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <User className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
