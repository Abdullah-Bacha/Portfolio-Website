import React, { useState } from "react";
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaEnvelopeOpenText,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: <FaHome />, link: "hero" },
    { name: "About", icon: <FaUserAlt />, link: "about" },
    { name: "Projects", icon: <FaProjectDiagram />, link: "projects" },
    { name: "Contact", icon: <FaEnvelopeOpenText />, link: "contact" },
  ];
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          ABDULLAH
        </h1>
        <ul className="hidden lg:flex gap-6 text-white mb-1">
          {menuItems.map((item, i) => (
            <li key={i}>
              <span
                onClick={() => scrollToSection(item.link)}
                className="flex items-center gap-2 text-lg text-[#e48979]
                  hover:bg-gray-700 hover:rounded-lg cursor-pointer
                  transition-all duration-300 hover:scale-105
                  hover:shadow-lg hover:shadow-gray-700
                  px-3 py-2"
              >
                {item.icon}
                {item.name}
              </span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-gray-800 border-t border-gray-700">
          <ul className="flex flex-col py-4">
            {menuItems.map((item, i) => (
              <li key={i}>
                <span
                  onClick={() => scrollToSection(item.link)}
                  className="flex items-center gap-3 px-6 py-3
                    text-[#e48979] text-lg
                    hover:bg-gray-700 cursor-pointer
                    transition"
                >
                  {item.icon}
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
export default Navbar;
