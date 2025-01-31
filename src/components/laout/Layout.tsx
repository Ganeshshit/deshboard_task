import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

// Define types for the props
interface LayoutProps {
  children: ReactNode; // The children prop can be any valid React node
  darkMode: boolean; // darkMode is a boolean
  toggleDarkMode: () => void; // toggleDarkMode is a function that takes no arguments and returns void
}

const Layout: React.FC<LayoutProps> = ({
  children,
  darkMode,
  toggleDarkMode,
}) => {
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
