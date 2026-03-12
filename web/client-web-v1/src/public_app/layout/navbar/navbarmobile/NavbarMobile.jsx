// src\public_app\layout\navbar\navbarmobile\NavbarMobile.jsx
import React, { useState, useEffect } from "react";
import {
  BiAtom,
  BiSearch,
  BiSun,
  BiMoon,
  BiUser,
  BiMenu,
  BiX,
  BiChevronDown,
  BiChevronRight,
} from "react-icons/bi";
import {
  scienceCategories,
  userMenuItems,
  aboutLinks, // Changed from quickLinks to aboutLinks
  resourcesLinks,
} from "../components/NavbarData";

const NavbarMobile = ({ darkMode, toggleDarkMode, isLoggedIn = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setExpandedCategory(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality
    setShowSearch(false);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav
        className={`lg:hidden w-full ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} shadow-lg sticky top-0 z-50`}
      >
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <BiAtom className="text-3xl text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold tracking-tight">
                Science
                <span className="text-blue-600 dark:text-blue-400">Qubit</span>
              </span>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-2">
              {/* Search Toggle */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className={`p-2 rounded-full ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
              >
                <BiSearch size={20} />
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${
                  darkMode
                    ? "bg-gray-800 text-yellow-400"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {darkMode ? <BiSun size={20} /> : <BiMoon size={20} />}
              </button>

              {/* Menu Toggle */}
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-full ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
              >
                {isMenuOpen ? <BiX size={24} /> : <BiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {showSearch && (
            <form onSubmit={handleSearch} className="mt-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for topics, courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg text-sm border ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  autoFocus
                />
                <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </form>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 pt-16">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleMenu}
          />

          {/* Menu Panel */}
          <div
            className={`absolute right-0 top-16 bottom-0 w-full max-w-sm ${
              darkMode ? "bg-gray-900" : "bg-white"
            } shadow-xl overflow-y-auto`}
          >
            <div className="p-4">
              {/* User Section */}
              <div
                className={`mb-6 p-4 rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                {isLoggedIn ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-lg">
                      U
                    </div>
                    <div>
                      <div className="font-semibold">John Doe</div>
                      <div
                        className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                      >
                        john.doe@example.com
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                      Sign Up
                    </button>
                    <button
                      className={`w-full px-4 py-3 border ${
                        darkMode
                          ? "border-gray-700 text-gray-200 hover:bg-gray-700"
                          : "border-gray-300 text-gray-700 hover:bg-gray-100"
                      } rounded-lg font-medium transition-colors`}
                    >
                      Log In
                    </button>
                  </div>
                )}
              </div>

              {/* Science Categories */}
              <div className="mb-6">
                <h3
                  className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Science Categories
                </h3>
                <div className="space-y-2">
                  {scienceCategories.map((category) => (
                    <div
                      key={category.label}
                      className="border-b last:border-0 pb-2 last:pb-0"
                    >
                      <button
                        onClick={() =>
                          setExpandedCategory(
                            expandedCategory === category.label
                              ? null
                              : category.label,
                          )
                        }
                        className="flex items-center justify-between w-full py-2"
                      >
                        <div className="flex items-center space-x-3">
                          <span className={`text-xl ${category.color}`}>
                            {category.icon}
                          </span>
                          <span className="font-medium">{category.label}</span>
                        </div>
                        {expandedCategory === category.label ? (
                          <BiChevronDown className="text-xl" />
                        ) : (
                          <BiChevronRight className="text-xl" />
                        )}
                      </button>

                      {/* Dropdown Items */}
                      {expandedCategory === category.label && (
                        <div className="ml-9 mt-2 space-y-2">
                          {category.dropdown.map((item) => (
                            <a
                              key={item.label}
                              href={item.to}
                              className={`block py-2 text-sm ${
                                darkMode ? "text-gray-400" : "text-gray-600"
                              } hover:text-blue-600 dark:hover:text-blue-400`}
                              onClick={toggleMenu}
                            >
                              {item.label}
                            </a>
                          ))}
                          <a
                            href={category.to}
                            className={`block py-2 text-sm font-medium text-blue-600 dark:text-blue-400`}
                            onClick={toggleMenu}
                          >
                            View All {category.label}
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links - using aboutLinks */}
              <div className="mb-6">
                <h3
                  className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Quick Links
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {aboutLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.to}
                      className={`px-3 py-2 text-sm rounded-lg ${
                        darkMode
                          ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      } transition-colors text-center`}
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="mb-6">
                <h3
                  className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Resources
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {resourcesLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.to}
                      className={`px-3 py-2 text-sm rounded-lg ${
                        darkMode
                          ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      } transition-colors text-center`}
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* User Menu Items (when logged in) */}
              {isLoggedIn && (
                <div className="mb-6">
                  <h3
                    className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Account
                  </h3>
                  <div className="space-y-1">
                    {userMenuItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.to}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${
                          item.danger
                            ? darkMode
                              ? "text-red-400 hover:bg-gray-800"
                              : "text-red-600 hover:bg-gray-100"
                            : darkMode
                              ? "text-gray-200 hover:bg-gray-800"
                              : "text-gray-700 hover:bg-gray-100"
                        } transition-colors`}
                        onClick={toggleMenu}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarMobile;
