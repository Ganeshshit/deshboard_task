import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Layout = ({ children, darkMode, toggleDarkMode }) => {
  return (
    <div
      className={
        darkMode
          ? "bg-gray-800 text-white min-h-screen"
          : "bg-white text-gray-800 min-h-screen"
      }
    >
      <div className="flex">
        <Sidebar darkMode={darkMode} />
        <div className="flex-1 flex flex-col min-h-screen">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className="flex-grow flex items-center justify-center p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
