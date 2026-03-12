import React, { useState } from "react";
import {
  BiAtom,
  BiSolidFlask, // Changed from BiFlask to BiSolidFlask
  BiDna,
  BiMath,
  BiPlanet,
  BiHeart,
  BiSearch,
  BiSun,
  BiMoon,
  BiUser,
  BiChevronDown,
} from "react-icons/bi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real implementation, you would also toggle a class on the html element
    // e.g., document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    {
      name: "Mathematics",
      icon: <BiMath />,
      dropdown: ["Algebra", "Calculus", "Geometry", "Statistics"],
    },
    {
      name: "Biology",
      icon: <BiDna />,
      dropdown: ["Cell Biology", "Genetics", "Ecology", "Neuroscience"],
    },
    {
      name: "Chemistry",
      icon: <BiSolidFlask />,
      dropdown: ["Organic", "Inorganic", "Physical", "Biochemistry"],
    },
    {
      name: "Physics",
      icon: <BiAtom />,
      dropdown: ["Mechanics", "Quantum", "Relativity", "Thermodynamics"],
    },
    {
      name: "Astronomy",
      icon: <BiPlanet />,
      dropdown: ["Stars", "Planets", "Galaxies", "Cosmology"],
    },
    {
      name: "Sexology",
      icon: <BiHeart />,
      dropdown: ["Human Sexuality", "Health", "Psychology", "Education"],
    },
  ];

  return (
    <nav
      className={`w-full ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} shadow-md`}
    >
      {/* First row: logo + site name, search, dark mode toggle, signup */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700">
        {/* Logo and site name */}
        <div className="flex items-center space-x-2">
          <BiAtom className="text-3xl text-blue-600 dark:text-blue-400" />
          <span className="text-xl font-bold tracking-tight">
            Science
            <span className="text-blue-600 dark:text-blue-400">Qubit</span>
          </span>
        </div>

        {/* Search bar */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search across sciences..."
              className={`w-full py-2 pl-10 pr-4 rounded-full border ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Dark mode toggle and signup */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              darkMode
                ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <BiSun size={20} /> : <BiMoon size={20} />}
          </button>
          <button className="flex items-center space-x-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors">
            <BiUser size={18} />
            <span>Sign Up</span>
          </button>
        </div>
      </div>

      {/* Second row: navigation items with dropdowns */}
      <div className="flex items-center justify-center space-x-2 px-6 py-2 overflow-x-auto">
        {navItems.map((item) => (
          <div key={item.name} className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === item.name ? null : item.name)
              }
              className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-colors ${
                darkMode
                  ? "hover:bg-gray-800 text-gray-200"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
              <BiChevronDown
                className={`transition-transform ${
                  openDropdown === item.name ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown menu */}
            {openDropdown === item.name && (
              <>
                {/* Backdrop to close dropdown when clicking outside */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setOpenDropdown(null)}
                />
                <div
                  className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg z-20 ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } ring-1 ring-black ring-opacity-5`}
                >
                  <div className="py-1">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className={`block px-4 py-2 text-sm ${
                          darkMode
                            ? "text-gray-200 hover:bg-gray-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          // Handle navigation
                          setOpenDropdown(null);
                        }}
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
