import React from "react";
import { Link } from "react-router-dom";
import {
  FaEthereum,
  FaKey,
  FaHome,
  FaShoppingBag,
  FaCalendarAlt,
  FaCog,
  FaPowerOff,
} from "react-icons/fa";

const Sidebar = ({ darkMode }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-[100px] h-full ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } shadow-lg`}
    >
      <div className="flex flex-col p-4 space-y-4">
        <Link to="/" className="text-xl flex items-center space-x-2">
          <FaEthereum />
        </Link>
        <Link to="/key" className="text-xl flex items-center space-x-2">
          <FaKey />
        </Link>
        <Link to="/home" className="text-xl flex items-center space-x-2">
          <FaHome />
        </Link>
        <Link to="/bag" className="text-xl flex items-center space-x-2">
          <FaShoppingBag />
        </Link>
        <Link to="/calendar" className="text-xl flex items-center space-x-2">
          <FaCalendarAlt />
        </Link>
        <Link to="/settings" className="text-xl flex items-center space-x-2">
          <FaCog />
        </Link>
      </div>

      {/* Power/Logout Icon at the Bottom */}
      <div className="absolute bottom-4 left-0 w-full p-4 flex justify-center">
        <Link
          to="/logout"
          className="text-xl flex items-center space-x-2 text-red-500"
        >
          <FaPowerOff />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
